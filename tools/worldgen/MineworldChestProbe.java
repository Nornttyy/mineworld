// Read actual baked vertices and UVs from the official closed chest model.
import java.nio.file.*;
import java.util.*;
import com.google.gson.Gson;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.model.object.chest.ChestModel;

public class MineworldChestProbe {
  @SuppressWarnings("unchecked")
  public static void main(String[] args) throws Exception {
    var root=ChestModel.createSingleBodyLayer().bakeRoot();
    var cubesField=ModelPart.class.getDeclaredField("cubes");cubesField.setAccessible(true);
    var parts=new ArrayList<Map<String,Object>>();
    for(var name:List.of("bottom","lid","lock")) {
      var part=root.getChild(name);var quads=new ArrayList<Map<String,Object>>();var boxes=new ArrayList<List<Float>>();
      for(var cube:(List<ModelPart.Cube>)cubesField.get(part)) {
        boxes.add(List.of((cube.minX+part.x)/16,(cube.minY+part.y)/16,(cube.minZ+part.z)/16,(cube.maxX+part.x)/16,(cube.maxY+part.y)/16,(cube.maxZ+part.z)/16));
        for(var polygon:cube.polygons) {
          var vertices=new ArrayList<List<Float>>();var uv=new ArrayList<List<Float>>();
          for(var v:polygon.vertices()) {vertices.add(List.of((v.x()+part.x)/16,(v.y()+part.y)/16,(v.z()+part.z)/16));uv.add(List.of(v.u(),v.v()));}
          var n=polygon.normal();quads.add(Map.of("vertices",vertices,"uv",uv,"normal",List.of(n.x(),n.y(),n.z())));
        }
      }
      parts.add(Map.of("name",name,"offsetPixels",List.of(part.x,part.y,part.z),"rotationRadians",List.of(part.xRot,part.yRot,part.zRot),"boxes",boxes,"quads",quads));
    }
    var result=new LinkedHashMap<String,Object>();
    result.put("target","Minecraft Java 26.3");result.put("source","ChestModel.createSingleBodyLayer().bakeRoot() from official client");
    result.put("texture","assets/minecraft/textures/entity/chest/normal.png");result.put("textureSize",List.of(64,64));
    result.put("baseFacing","south");result.put("closed",true);result.put("parts",parts);
    result.put("coordinateConvention","vertices in block-local 0..1 coordinates, including official part offset; UV normalized 0..1, image V down; outward normals and official polygon vertex order preserved");
    result.put("facingYRotationDegrees",Map.of("south",0,"west",-90,"north",-180,"east",-270));
    result.put("rotationPivot",List.of(0.5,0,0.5));
    Files.writeString(Path.of(args[0]),new Gson().toJson(result)+"\n");
    System.out.println("Captured actual closed chest: "+parts.size()+" parts / 18 quads");
  }
}
