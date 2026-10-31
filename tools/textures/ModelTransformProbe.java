import com.google.gson.*;
import com.mojang.math.Quadrant;
import net.minecraft.client.renderer.block.dispatch.Variant;
import net.minecraft.core.Direction;
import org.joml.*;
import java.nio.file.*;
public class ModelTransformProbe {
 public static void main(String[] args)throws Exception {
  JsonArray out=new JsonArray();
  for(int x:new int[]{0,90,180,270})for(int y:new int[]{0,90,180,270})for(Direction d:Direction.values()){
   var state=new Variant.SimpleModelState(Quadrant.parseJson(x),Quadrant.parseJson(y),Quadrant.R0,true).asModelState();
   JsonObject o=new JsonObject();o.addProperty("x",x);o.addProperty("y",y);o.addProperty("face",d.getSerializedName());
   JsonArray uv=new JsonArray();
   for(float[] v:new float[][]{{0,0},{0,1},{1,1},{1,0}}){var p=state.inverseFaceTransformation(d).transformPosition(new Vector3f(v[0]-.5f,v[1]-.5f,0));JsonArray a=new JsonArray();a.add(p.x+.5f);a.add(p.y+.5f);uv.add(a);}o.add("uv",uv);
   JsonArray vectors=new JsonArray();for(float[] v:new float[][]{{1,0,0},{0,1,0},{0,0,1}}){var p=state.transformation().getMatrix().transformDirection(new Vector3f(v));JsonArray a=new JsonArray();a.add(p.x);a.add(p.y);a.add(p.z);vectors.add(a);}o.add("basis",vectors);out.add(o);
  }
  Files.writeString(Path.of(args[0]),new Gson().toJson(out));
 }
}
