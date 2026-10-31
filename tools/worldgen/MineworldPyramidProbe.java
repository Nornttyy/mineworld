// Sample block placement by the official DesertPyramidPiece; do not copy game implementation.
import java.lang.reflect.*;
import java.nio.file.*;
import java.util.*;
import com.google.gson.Gson;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.HolderSet;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.WorldGenLevel;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.ChestBlockEntity;
import net.minecraft.world.level.block.entity.BrushableBlockEntity;
import net.minecraft.world.level.levelgen.structure.Structure;
import net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer;
import net.minecraft.world.level.levelgen.structure.structures.DesertPyramidStructure;
import net.minecraft.world.level.storage.loot.BuiltInLootTables;
import net.minecraft.world.level.levelgen.structure.BoundingBox;
import net.minecraft.world.level.levelgen.structure.structures.DesertPyramidPiece;

public class MineworldPyramidProbe {
  static final int GROUND = 64; // First air block; unrecorded flat substrate is sandstone below.
  static final long SEED = 0L;
  static final Map<BlockPos,BlockState> placed = new HashMap<>();
  static final Map<BlockPos,BlockEntity> entities = new HashMap<>();
  static BlockState state(BlockPos pos) {
    return placed.getOrDefault(pos, pos.getY()<GROUND ? Blocks.SANDSTONE.defaultBlockState() : Blocks.AIR.defaultBlockState());
  }
  @SuppressWarnings({"rawtypes","unchecked"})
  static Map<String,Object> describe(BlockState state) {
    var result = new LinkedHashMap<String,Object>();
    result.put("Name",BuiltInRegistries.BLOCK.getKey(state.getBlock()).toString());
    var props = new TreeMap<String,String>();
    for(var prop:state.getProperties()) props.put(prop.getName(),((Property)prop).getName((Comparable)state.getValue((Property)prop)));
    if(!props.isEmpty()) result.put("Properties",props);
    return result;
  }
  public static void main(String[] args) throws Exception {
    SharedConstants.tryDetectVersion(); Bootstrap.bootStrap();
    var random=RandomSource.create(SEED);
    WorldGenLevel world=(WorldGenLevel)Proxy.newProxyInstance(WorldGenLevel.class.getClassLoader(),new Class[]{WorldGenLevel.class},(proxy,method,values)->{
      switch(method.getName()) {
        case "setBlock": {
          var pos=((BlockPos)values[0]).immutable();var s=(BlockState)values[1]; placed.put(pos,s);
          if(s.is(Blocks.CHEST)) entities.put(pos,new ChestBlockEntity(pos,s));
          else if(s.is(Blocks.SUSPICIOUS_SAND)) entities.put(pos,new BrushableBlockEntity(pos,s));
          else entities.remove(pos);
          return true;
        }
        case "getBlockState": return state((BlockPos)values[0]);
        case "getFluidState": return state((BlockPos)values[0]).getFluidState();
        case "getBlockEntity": return values.length==1?entities.get((BlockPos)values[0]):Optional.ofNullable(entities.get((BlockPos)values[0]));
        case "getHeightmapPos": return new BlockPos(((BlockPos)values[1]).getX(),GROUND,((BlockPos)values[1]).getZ());
        case "getHeight": return values==null||values.length==0 ? 384 : GROUND;
        case "getMinY": return -64;
        case "getMaxY": return 319;
        case "getSeed": return SEED;
        case "getRandom": return random;
        case "isEmptyBlock": return state((BlockPos)values[0]).isAir();
        case "hasChunk": case "ensureCanWrite": return true;
        case "scheduleTick": return null;
        case "toString": return "Mineworld official pyramid block collector";
        default:
          if(method.isDefault()) return InvocationHandler.invokeDefault(proxy,method,values);
          throw new UnsupportedOperationException(method.toString());
      }
    });
    var piece=new DesertPyramidPiece(RandomSource.create(SEED),0,0);
    piece.setOrientation(Direction.NORTH);
    piece.postProcess(world,null,null,random,new BoundingBox(-128,-64,-128,128,319,128),new ChunkPos(0,0),BlockPos.ZERO);
    new DesertPyramidStructure(new Structure.StructureSettings(HolderSet.direct(List.of()))).afterPlace(world,null,null,random,new BoundingBox(-128,-64,-128,128,319,128),new ChunkPos(0,0),new PiecesContainer(List.of(piece)));
    int minX=placed.keySet().stream().mapToInt(BlockPos::getX).min().orElseThrow(),maxX=placed.keySet().stream().mapToInt(BlockPos::getX).max().orElseThrow();
    int minY=placed.keySet().stream().mapToInt(BlockPos::getY).min().orElseThrow(),maxY=placed.keySet().stream().mapToInt(BlockPos::getY).max().orElseThrow();
    int minZ=placed.keySet().stream().mapToInt(BlockPos::getZ).min().orElseThrow(),maxZ=placed.keySet().stream().mapToInt(BlockPos::getZ).max().orElseThrow();
    var palette=new ArrayList<Map<String,Object>>();var stateIndices=new LinkedHashMap<BlockState,Integer>();
    var blocks=new ArrayList<List<Integer>>();
    placed.entrySet().stream().sorted(Comparator.comparingInt((Map.Entry<BlockPos,BlockState> e)->e.getKey().getY()).thenComparingInt(e->e.getKey().getZ()).thenComparingInt(e->e.getKey().getX())).forEach(e->{
      var pos=e.getKey();var s=e.getValue();var index=stateIndices.computeIfAbsent(s,k->{palette.add(describe(k));return palette.size()-1;});
      blocks.add(List.of(pos.getX()-minX,pos.getY()-minY,pos.getZ()-minZ,index));
    });
    var blockEntities=new ArrayList<Map<String,Object>>();
    for(var entry:entities.entrySet()) {
      var pos=entry.getKey();var d=new LinkedHashMap<String,Object>();
      d.put("pos",List.of(pos.getX()-minX,pos.getY()-minY,pos.getZ()-minZ));
      boolean chest=entry.getValue() instanceof ChestBlockEntity;d.put("id",chest?"minecraft:chest":"minecraft:brushable_block");
      d.put("LootTable",chest?((ChestBlockEntity)entry.getValue()).getLootTable().identifier().toString():BuiltInLootTables.DESERT_PYRAMID_ARCHAEOLOGY.identifier().toString());
      d.put("LootTableSeed",Long.toString(chest?((ChestBlockEntity)entry.getValue()).getLootTableSeed():pos.asLong()));blockEntities.add(d);
    }
    blockEntities.sort(Comparator.comparing(Object::toString));
    var result=new LinkedHashMap<String,Object>();
    result.put("target","Minecraft Java 26.3");result.put("source","Official DesertPyramidPiece.postProcess and DesertPyramidStructure.afterPlace placement capture on flat sandstone at heightmap Y=64");
    result.put("seed",Long.toString(SEED));result.put("orientation","north");
    result.put("size",List.of(maxX-minX+1,maxY-minY+1,maxZ-minZ+1));
    result.put("sourceOrigin",List.of(minX,minY,minZ));result.put("groundOffset",GROUND-1-minY);
    result.put("pieceOriginOffset",piece.getBoundingBox().minY()-minY);
    result.put("palette",palette);result.put("blocks",blocks);result.put("blockEntities",blockEntities);
    result.put("potentialSuspiciousSand",piece.getPotentialSuspiciousSandWorldPositions().stream().map(p->List.of(p.getX()-minX,p.getY()-minY,p.getZ()-minZ)).toList());
    var roof=piece.getRandomCollapsedRoofPos();if(roof!=null)result.put("randomCollapsedRoofPos",List.of(roof.getX()-minX,roof.getY()-minY,roof.getZ()-minZ));
    result.put("limits",List.of("Captures official piece placement, not world structure placement RNG or terrain adaptation", "Chest block states and loot-table identity retained; loot items are not generated"));
    Files.writeString(Path.of(args[0]),new Gson().toJson(result)+"\n");
    System.out.println("Captured "+blocks.size()+" placements; "+palette.size()+" states; "+result.get("size"));
    System.out.println(palette.stream().map(p->p.get("Name").toString()).distinct().sorted().toList());
  }
}
