// Read data from the official registry; no server startup or executable classes are exported.
import java.nio.file.*;
import java.util.*;
import com.google.gson.Gson;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.core.registries.BuiltInRegistries;

public class MineworldSoundProbe {
  public static void main(String[] args) throws Exception {
    SharedConstants.tryDetectVersion();
    Bootstrap.bootStrap();
    var result = new TreeMap<String, Object>();
    for (var block : BuiltInRegistries.BLOCK) {
      var s = block.defaultBlockState().getSoundType();
      result.put(BuiltInRegistries.BLOCK.getKey(block).getPath(), Map.of(
        "volume", s.getVolume(), "pitch", s.getPitch(),
        "break", s.getBreakSound().location().getPath(),
        "step", s.getStepSound().location().getPath(),
        "place", s.getPlaceSound().location().getPath(),
        "hit", s.getHitSound().location().getPath(),
        "fall", s.getFallSound().location().getPath()));
    }
    Files.writeString(Path.of(args[0]), new Gson().toJson(result));
  }
}
