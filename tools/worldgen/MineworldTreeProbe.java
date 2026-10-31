// Capture official configured feature placements without reproducing game algorithms.
import java.lang.reflect.*;
import java.nio.file.*;
import java.util.*;
import java.util.function.Predicate;
import com.google.gson.*;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.core.*;
import net.minecraft.core.registries.*;
import net.minecraft.data.registries.VanillaRegistries;
import net.minecraft.data.worldgen.features.TreeFeatures;
import net.minecraft.resources.*;
import net.minecraft.tags.*;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.WorldGenLevel;
import net.minecraft.world.level.block.*;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraft.world.level.levelgen.feature.Feature;

public class MineworldTreeProbe {
  static final int GROUND=64;
  static final Map<BlockPos,BlockState> placed=new HashMap<>();
  static BlockState ground;
  static BlockState state(BlockPos pos) {
    return placed.getOrDefault(pos,pos.getY()==GROUND-1?ground:pos.getY()<GROUND?Blocks.DIRT.defaultBlockState():Blocks.AIR.defaultBlockState());
  }
  @SuppressWarnings({"rawtypes","unchecked"})
  static Map<String,Object> describe(BlockState state) {
    var result=new LinkedHashMap<String,Object>();result.put("Name",BuiltInRegistries.BLOCK.getKey(state.getBlock()).toString());
    var props=new TreeMap<String,String>();
    for(var prop:state.getProperties()) props.put(prop.getName(),((Property)prop).getName((Comparable)state.getValue((Property)prop)));
    if(!props.isEmpty()) result.put("Properties",props);return result;
  }
  static void bindOfficialBlockTags(Path file) throws Exception {
    var tags=new LinkedHashMap<TagKey<Block>,List<Holder<Block>>>();
    var json=JsonParser.parseString(Files.readString(file)).getAsJsonObject();
    for(var entry:json.entrySet()) {
      var members=new ArrayList<Holder<Block>>();
      for(var id:entry.getValue().getAsJsonArray()) members.add(BuiltInRegistries.BLOCK.getOrThrow(ResourceKey.create(Registries.BLOCK,Identifier.parse(id.getAsString()))));
      tags.put(TagKey.create(Registries.BLOCK,Identifier.parse(entry.getKey())),members);
    }
    BuiltInRegistries.BLOCK.prepareTagReload(new TagLoader.LoadResult<Block>(Registries.BLOCK,tags)).apply();
  }
  @SuppressWarnings({"unchecked","rawtypes"})
  public static void main(String[] args) throws Exception {
    SharedConstants.tryDetectVersion();Bootstrap.bootStrap();bindOfficialBlockTags(Path.of(args[1]));
    var registry=VanillaRegistries.createWorldLookup().lookupOrThrow(Registries.FEATURE);
    var kinds=new LinkedHashMap<String,ResourceKey<Feature>>();
    kinds.put("acacia",TreeFeatures.ACACIA);kinds.put("cherry",TreeFeatures.CHERRY);kinds.put("dark_oak",TreeFeatures.DARK_OAK);
    kinds.put("jungle",TreeFeatures.JUNGLE_TREE);kinds.put("mega_jungle",TreeFeatures.MEGA_JUNGLE_TREE);
    kinds.put("brown_mushroom",TreeFeatures.HUGE_BROWN_MUSHROOM);kinds.put("red_mushroom",TreeFeatures.HUGE_RED_MUSHROOM);
    kinds.put("mega_spruce",TreeFeatures.MEGA_SPRUCE);kinds.put("swamp_oak",TreeFeatures.SWAMP_OAK);
    var palette=new ArrayList<Map<String,Object>>();var stateIndices=new LinkedHashMap<BlockState,Integer>();var samples=new ArrayList<Map<String,Object>>();
    for(var kind:kinds.entrySet()) for(long seed=0;seed<4;seed++) {
      placed.clear();ground=(kind.getKey().contains("mushroom")?Blocks.MYCELIUM:Blocks.GRASS_BLOCK).defaultBlockState();
      var random=RandomSource.create(seed);final long sampleSeed=seed;
      WorldGenLevel world=(WorldGenLevel)Proxy.newProxyInstance(WorldGenLevel.class.getClassLoader(),new Class[]{WorldGenLevel.class},(proxy,method,values)->{
        switch(method.getName()) {
          case "setBlock": placed.put(((BlockPos)values[0]).immutable(),(BlockState)values[1]);return true;
          case "getBlockState": return state((BlockPos)values[0]);
          case "getFluidState": return state((BlockPos)values[0]).getFluidState();
          case "isStateAtPosition": return ((Predicate)values[1]).test(state((BlockPos)values[0]));
          case "isFluidAtPosition": return ((Predicate)values[1]).test(state((BlockPos)values[0]).getFluidState());
          case "getBlockEntity": return values.length==1?null:Optional.empty();
          case "getHeightmapPos": return new BlockPos(((BlockPos)values[1]).getX(),GROUND,((BlockPos)values[1]).getZ());
          case "getHeight": return values==null||values.length==0?384:GROUND;
          case "getMinY": return -64;
          case "getMaxY": return 319;
          case "getSeed": return sampleSeed;
          case "getRandom": return random;
          case "isEmptyBlock": return state((BlockPos)values[0]).isAir();
          case "hasChunk": case "ensureCanWrite": return true;
          case "scheduleTick": return null;
          case "toString": return "Mineworld official tree collector";
          default:
            if(method.isDefault()) return InvocationHandler.invokeDefault(proxy,method,values);
            throw new UnsupportedOperationException(method.toString());
        }
      });
      var feature=registry.getOrThrow(kind.getValue()).value();
      boolean success=feature.place(world,null,random,new BlockPos(0,GROUND,0));
      if(!success) throw new IllegalStateException("Feature placement failed: "+kind.getKey()+" seed="+seed+" blocks="+placed.size());
      var blocks=new ArrayList<List<Integer>>();
      placed.entrySet().stream().sorted(Comparator.comparingInt((Map.Entry<BlockPos,BlockState> e)->e.getKey().getY()).thenComparingInt(e->e.getKey().getZ()).thenComparingInt(e->e.getKey().getX())).forEach(e->{
        var pos=e.getKey();var index=stateIndices.computeIfAbsent(e.getValue(),k->{palette.add(describe(k));return palette.size()-1;});
        blocks.add(List.of(pos.getX(),pos.getY()-GROUND,pos.getZ(),index));
      });
      var sample=new LinkedHashMap<String,Object>();sample.put("kind",kind.getKey());sample.put("feature",kind.getValue().identifier().toString());sample.put("seed",Long.toString(seed));sample.put("ground",describe(ground));sample.put("blocks",blocks);
      sample.put("min",List.of(placed.keySet().stream().mapToInt(BlockPos::getX).min().orElseThrow(),placed.keySet().stream().mapToInt(BlockPos::getY).min().orElseThrow()-GROUND,placed.keySet().stream().mapToInt(BlockPos::getZ).min().orElseThrow()));
      sample.put("max",List.of(placed.keySet().stream().mapToInt(BlockPos::getX).max().orElseThrow(),placed.keySet().stream().mapToInt(BlockPos::getY).max().orElseThrow()-GROUND,placed.keySet().stream().mapToInt(BlockPos::getZ).max().orElseThrow()));
      samples.add(sample);System.out.println(kind.getKey()+" "+seed+": "+blocks.size()+" placements "+sample.get("min")+".."+sample.get("max"));
    }
    var result=new LinkedHashMap<String,Object>();result.put("target","Minecraft Java 26.3");result.put("source","Official configured Feature.place captures using VanillaRegistries feature bootstrap and official block tags");
    result.put("coordinateConvention","Signed block offsets relative to feature origin, first air block above flat ground; ground surface is y=-1");result.put("palette",palette);result.put("samples",samples);
    result.put("limits",List.of("Official generated shapes on flat grass/mycelium, not world seed placement parity", "No entity or scheduled-tick simulation; generated block states and explicit shape updates are captured"));
    Files.writeString(Path.of(args[0]),new Gson().toJson(result)+"\n");System.out.println(palette.stream().map(p->p.get("Name").toString()).distinct().sorted().toList());
  }
}
