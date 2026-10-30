import java.util.*;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.data.registries.VanillaRegistries;
import net.minecraft.core.registries.Registries;
import net.minecraft.world.level.levelgen.RandomState;
import net.minecraft.world.level.levelgen.NoiseGeneratorSettings;
import net.minecraft.world.level.levelgen.densityfunction.SamplerContext;
import net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterLists;

public class MineworldNoiseProbe {
 public static void main(String[] args) {
  SharedConstants.tryDetectVersion(); Bootstrap.bootStrap();
  var registry=VanillaRegistries.createWorldLookup();
  var settings=registry.lookupOrThrow(Registries.NOISE_SETTINGS).getOrThrow(NoiseGeneratorSettings.OVERWORLD).value();
  var biomeParameters=registry.lookupOrThrow(Registries.MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST).getOrThrow(MultiNoiseBiomeSourceParameterLists.OVERWORLD).value().parameters();
  var noises=registry.lookupOrThrow(Registries.NOISE);
  long[] seeds={0L,1L,4294967297L,765432109876543210L,-9223372036854775808L};
  int[][] points={{0,-64,0},{0,0,0},{0,63,0},{37,70,-29},{-17,-30,-1},{-16,0,0},{-1,64,16},{0,80,17},{16,100,0},{1000,63,-1000}};
  var results=new ArrayList<String>();
  for(long seed:seeds){
   var state=RandomState.create(noises,seed,settings);
   var sampler=state.createClimateSampler(SamplerContext.EMPTY_UNCACHED);
   for(int[] p:points){
    float d=state.sampleBlockValueUncached(settings.noiseRouter().finalDensity(),p[0],p[1],p[2]);
    var biome=biomeParameters.findValue(sampler.sample(Math.floorDiv(p[0],4),Math.floorDiv(p[1],4),Math.floorDiv(p[2],4))).unwrapKey().get().identifier();
    results.add(String.format(Locale.ROOT,"{\"seed\":\"%d\",\"x\":%d,\"y\":%d,\"z\":%d,\"density\":%.12g,\"biome\":\"%s\"}",seed,p[0],p[1],p[2],d,biome));
   }
  }
  Bootstrap.realStdoutPrintln("MINEWORLD_SAMPLES="+"["+String.join(",",results)+"]");
 }
}
