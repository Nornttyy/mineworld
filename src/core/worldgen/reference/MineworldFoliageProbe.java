// Test-only harness: invokes official 26.3 foliage placers, intercepting their
// leaf rows before world access. This validates shape rules, not feature placement.
import java.util.*;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.core.BlockPos;
import net.minecraft.util.RandomSource;
import net.minecraft.util.valueproviders.ConstantInt;
import net.minecraft.world.level.WorldGenLevel;
import net.minecraft.world.level.levelgen.LegacyRandomSource;
import net.minecraft.world.level.levelgen.feature.TreeFeature;
import net.minecraft.world.level.levelgen.feature.foliageplacers.*;
public class MineworldFoliageProbe {
 static List<String> points = new ArrayList<>();
 static class Blob extends BlobFoliagePlacer {
  Blob() { super(ConstantInt.of(2), ConstantInt.of(0), 3); }
  void run(RandomSource random, int height, int radius, int offset) {
   createFoliage(null, null, random, null, 8, new FoliageAttachment(BlockPos.ZERO, 0, false), height, radius, offset);
  }
  @Override protected void placeLeavesRow(WorldGenLevel world, FoliageSetter setter, RandomSource random, TreeFeature feature, BlockPos center, int radius, int y, boolean doubleTrunk) {
   for (int x=-radius;x<=radius;x++) for(int z=-radius;z<=radius;z++)
    if (!shouldSkipLocationSigned(random,x,y,z,radius,doubleTrunk)) points.add("["+x+","+y+","+z+"]");
  }
 }
 static class Spruce extends SpruceFoliagePlacer {
  Spruce() { super(ConstantInt.of(3), ConstantInt.of(1), ConstantInt.of(1)); }
  void run(RandomSource random, int height, int radius, int offset) {
   createFoliage(null, null, random, null, 8, new FoliageAttachment(BlockPos.ZERO, 0, false), height, radius, offset);
  }
  @Override protected void placeLeavesRow(WorldGenLevel world, FoliageSetter setter, RandomSource random, TreeFeature feature, BlockPos center, int radius, int y, boolean doubleTrunk) {
   for (int x=-radius;x<=radius;x++) for(int z=-radius;z<=radius;z++)
    if (!shouldSkipLocationSigned(random,x,y,z,radius,doubleTrunk)) points.add("["+x+","+y+","+z+"]");
  }
 }
 static class Pine extends PineFoliagePlacer {
  Pine() { super(ConstantInt.of(2), ConstantInt.of(1), ConstantInt.of(3)); }
  void run(RandomSource random, int height, int radius, int offset) {
   createFoliage(null, null, random, null, 8, new FoliageAttachment(BlockPos.ZERO, 0, false), height, radius, offset);
  }
  @Override protected void placeLeavesRow(WorldGenLevel world, FoliageSetter setter, RandomSource random, TreeFeature feature, BlockPos center, int radius, int y, boolean doubleTrunk) {
   for (int x=-radius;x<=radius;x++) for(int z=-radius;z<=radius;z++)
    if (!shouldSkipLocationSigned(random,x,y,z,radius,doubleTrunk)) points.add("["+x+","+y+","+z+"]");
  }
 }
 public static void main(String[] args) {
  SharedConstants.tryDetectVersion(); Bootstrap.bootStrap();
  List<String> cases=new ArrayList<>();
  for(int seed: new int[]{0,42,1337}) for(String kind:new String[]{"oak","spruce","pine"}) {
   int height=kind.equals("spruce")?6:3, radius=kind.equals("oak")?2:3, offset=kind.equals("oak")?0:1;
   points.clear(); RandomSource random=new LegacyRandomSource(seed);
   switch(kind) { case "oak" -> new Blob().run(random,height,radius,offset); case "spruce" -> new Spruce().run(random,height,radius,offset); case "pine" -> new Pine().run(random,height,radius,offset); }
   cases.add("{\"kind\":\""+kind+"\",\"seed\":"+seed+",\"height\":"+height+",\"radius\":"+radius+",\"offset\":"+offset+",\"leaves\":["+String.join(",",points)+"]}");
  }
  Bootstrap.realStdoutPrintln("MINEWORLD_FOLIAGE=["+String.join(",",cases)+"]");
 }
}
