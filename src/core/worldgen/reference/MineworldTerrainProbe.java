// Independent oracle: official Java terrain/material stages, no server startup.
// Structures, carvers and decoration are intentionally excluded and labelled.
import java.util.*;
import java.nio.file.*;
import java.lang.reflect.*;
import com.google.gson.Gson;
import net.minecraft.SharedConstants;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.server.Bootstrap;
import net.minecraft.data.registries.VanillaRegistries;
import net.minecraft.core.*;
import net.minecraft.core.registries.*;
import net.minecraft.world.level.*;
import net.minecraft.world.level.biome.*;
import net.minecraft.world.level.block.*;
import net.minecraft.world.level.chunk.*;
import net.minecraft.world.level.levelgen.*;
import net.minecraft.world.level.levelgen.blending.Blender;
import net.minecraft.world.level.levelgen.densityfunction.*;

public class MineworldTerrainProbe {
 static final List<String> palette = new ArrayList<>();
 static int id(String name) { int i=palette.indexOf(name); if(i<0){i=palette.size();palette.add(name);} return i; }
 static List<int[]> blocks(ProtoChunk chunk) {
  List<int[]> runs=new ArrayList<>(); int last=-1,count=0;
  for(int z=0;z<16;z++) for(int x=0;x<16;x++) for(int y=-64;y<320;y++) {
   var b=chunk.getBlockState(new BlockPos(chunk.getPos().getMinBlockX()+x,y,chunk.getPos().getMinBlockZ()+z));
   int i=id(BuiltInRegistries.BLOCK.getKey(b.getBlock()).toString());
   if(i==last)count++;else {if(count>0)runs.add(new int[]{last,count});last=i;count=1;}
  }
  if(count>0)runs.add(new int[]{last,count});return runs;
 }
 public static void main(String[] args) throws Exception {
  SharedConstants.tryDetectVersion(); Bootstrap.bootStrap();
  var lookup=VanillaRegistries.createWorldLookup();
  var settings=lookup.lookupOrThrow(Registries.NOISE_SETTINGS).getOrThrow(NoiseGeneratorSettings.OVERWORLD);
  var parameters=lookup.lookupOrThrow(Registries.MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST).getOrThrow(MultiNoiseBiomeSourceParameterLists.OVERWORLD);
  var source=MultiNoiseBiomeSource.createFromPreset(parameters);
  var biomes=lookup.lookupOrThrow(Registries.BIOME);
  var biomeIds=new IdMapper<Holder<Biome>>();biomes.listElements().forEach(biomeIds::add);
  var factory=new PalettedContainerFactory(Strategy.createForBlockStates(Block.BLOCK_STATE_REGISTRY),Blocks.AIR.defaultBlockState(),null,Strategy.createForBiomes(biomeIds),biomes.getOrThrow(Biomes.PLAINS),null);
  var generator=new NoiseBasedChunkGenerator(source,settings);
  Method fill=NoiseBasedChunkGenerator.class.getDeclaredMethod("doFill",NoiseChunk.class,ChunkAccess.class);fill.setAccessible(true);
  Method fluid=NoiseBasedChunkGenerator.class.getDeclaredMethod("createFluidPicker",NoiseGeneratorSettings.class);fluid.setAccessible(true);
  var picker=(Aquifer.FluidPicker)fluid.invoke(null,settings.value());
  List<Object> cases=new ArrayList<>();
  String[] seeds=args.length>1?args[1].split(","):new String[]{"0","36","4294967297","-1","-9223372036854775808","9223372036854775807"};
  for(String seed:seeds){
   var state=RandomState.create(lookup.lookupOrThrow(Registries.NOISE),Long.parseLong(seed),settings.value());
   var resolver=source.createResolver(state.createClimateSampler(SamplerContext.EMPTY_UNCACHED));
   var manager=new BiomeManager(resolver,BiomeManager.obfuscateSeed(Long.parseLong(seed)));
   for(int[] c:new int[][]{{0,0},{-1,0},{16,-16},{-64,64},{1024,-1024}}){
    var chunk=new ProtoChunk(new ChunkPos(c[0],c[1]),UpgradeData.EMPTY,LevelHeightAccessor.create(-64,384),factory,null);
    chunk.fillBiomesFromNoise(resolver);
    try(var noise=new NoiseChunk(state,Beardifier.EMPTY,settings.value(),picker,Blender.empty(),new DensityVolume(16,384,16,c[0]*16,-64,c[1]*16))){
     fill.invoke(generator,noise,chunk);
     var raw=blocks(chunk);
     Method depthMethod=state.surfaceSystem().getClass().getDeclaredMethod("getSurfaceDepth",int.class,int.class);depthMethod.setAccessible(true);
     List<Object> columns=new ArrayList<>();
     List<Object> ores=new ArrayList<>();
     for(int[] p:new int[][]{{2,-35,1},{13,-23,1},{6,-31,2},{-16,-33,4}}){
      var random=state.getOrCreateRandomFactory(Identifier.withDefaultNamespace("ore")).at(p[0],p[1],p[2]);
      List<Float> values=new ArrayList<>();
      for(String n:new String[]{"iron_density","richness","gap"}) {
       var f=lookup.lookupOrThrow(Registries.DENSITY_FUNCTION).getOrThrow(ResourceKey.create(Registries.DENSITY_FUNCTION,Identifier.withDefaultNamespace("overworld/ore_vein/"+n)));
       values.add(state.sampleBlockValueUncached(f.value(),p[0],p[1],p[2]));
      }
      ores.add(Map.of("pos",p,"values",values,"random",new float[]{random.nextFloat(),random.nextFloat(),random.nextFloat()}));
     }

     for(int lx:new int[]{0,7,15})for(int lz:new int[]{0,7,15}){
      int x=c[0]*16+lx,z=c[1]*16+lz;
      columns.add(Map.of("x",x,"z",z,"preliminary",state.sampleBlockValueUncached(settings.value().noiseRouter().chunkSurfaceLevel(),x,0,z),"depth",depthMethod.invoke(state.surfaceSystem(),x,z)));
     }
     state.surfaceSystem().buildSurface(state,manager,new WorldGenerationContext(generator,chunk),chunk,noise,settings.value().materialRule().value(),source.possibleBiomes());
     cases.add(Map.of("seed",seed,"cx",c[0],"cz",c[1],"raw",raw,"surface",blocks(chunk),"columns",columns,"ores",ores));
     Bootstrap.realStdoutPrintln("sampled "+seed+" "+c[0]+","+c[1]);
    }
   }
  }
  Files.writeString(Path.of(args[0]),new Gson().toJson(Map.of("version","26.3","scope","noise, aquifer, surface; no structures/carvers/features; block types only","palette",palette,"cases",cases))+"\n");
 }
}
