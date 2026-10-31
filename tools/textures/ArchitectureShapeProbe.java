// Export selected collision/selection shapes from the official registry, without starting a server.
import java.nio.file.*;
import java.util.*;
import com.google.gson.*;
import net.minecraft.SharedConstants;
import net.minecraft.server.Bootstrap;
import net.minecraft.core.BlockPos;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.Identifier;
import net.minecraft.world.level.EmptyBlockGetter;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.Property;
import net.minecraft.world.phys.shapes.VoxelShape;

public class ArchitectureShapeProbe {
 @SuppressWarnings({"unchecked","rawtypes"})
 static BlockState set(BlockState state,Property property,String value){
  return state.setValue(property,(Comparable)property.getValue(value).orElseThrow());
 }
 static List<List<Double>> boxes(VoxelShape shape){
  var out=new ArrayList<List<Double>>();
  for(var b:shape.toAabbs())out.add(List.of(b.minX,b.minY,b.minZ,b.maxX,b.maxY,b.maxZ));
  return out;
 }
 public static void main(String[] args)throws Exception {
  SharedConstants.tryDetectVersion();Bootstrap.bootStrap();
  var data=JsonParser.parseString(Files.readString(Path.of(args[0]))).getAsJsonObject();
  var out=new TreeMap<String,Object>();
  for(var value:data.getAsJsonArray("states")){
   var row=value.getAsJsonObject();
   var block=BuiltInRegistries.BLOCK.getValue(Identifier.parse(row.get("name").getAsString()));
   var state=block.defaultBlockState();
   for(var p:row.getAsJsonObject("properties").entrySet()){
    var prop=block.getStateDefinition().getProperty(p.getKey());
    if(prop==null)throw new IllegalArgumentException("Unknown property "+row.get("key")+" / "+p.getKey());
    state=set(state,prop,p.getValue().getAsString());
   }
   var collision=state.getCollisionShape(EmptyBlockGetter.INSTANCE,BlockPos.ZERO);
   var selection=state.getShape(EmptyBlockGetter.INSTANCE,BlockPos.ZERO);
   var details=new LinkedHashMap<String,Object>();
   details.put("boxes",boxes(collision));details.put("selectionBoxes",boxes(selection));
   details.put("occlusionBoxes",boxes(state.getOcclusionShape()));
   details.put("fullCube",Block.isShapeFullBlock(collision));details.put("canOcclude",state.canOcclude());
   details.put("lightEmission",state.getLightEmission());details.put("hardness",state.getDestroySpeed(EmptyBlockGetter.INSTANCE,BlockPos.ZERO));
   details.put("needsTool",state.requiresCorrectToolForDrops());
   out.put(row.get("key").getAsString(),details);
  }
  Files.writeString(Path.of(args[1]),new Gson().toJson(out));
 }
}
