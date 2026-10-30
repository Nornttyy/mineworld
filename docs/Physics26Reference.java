/**
 * Independent arithmetic fixture evaluator for verified Java 26.3 instructions.
 * This is project-authored test scaffolding, NOT extracted Minecraft source and
 * NOT a captured trajectory from a running official game. See physics-26.3-audit.md.
 * Run: java docs/Physics26Reference.java > src/core/physics/physics26.fixtures.json
 */
class Physics26Reference {
  static void ground(String key, float friction, boolean sprint, float speedFactor) {
    float speed = sprint ? (float)((double)0.1f * (1.0 + (double)0.3f)) : 0.1f;
    float acceleration = friction > 0.6 ? speed * (0.21600002f / (friction * friction * friction)) : speed;
    float drag = friction * 0.91f;
    double x = 0, v = 0;
    System.out.print("\"" + key + "\":[");
    for (int i = 0; i < 8; i++) {
      v += (double)0.98f * acceleration;
      x += v;
      v *= speedFactor;
      v *= drag;
      System.out.print((i == 0 ? "" : ",") + "[" + x + "," + v + "]");
    }
    System.out.println("],");
  }
  static void jump() {
    double y = 0, v = 0.42f;
    System.out.print("\"jump\":[");
    for (int i = 0; i < 10; i++) {
      if (Math.abs(v) < 0.003) v = 0;
      y += v;
      v = (v - 0.08) * (double)0.98f;
      System.out.print((i == 0 ? "" : ",") + "[" + y + "," + v + "]");
    }
    System.out.println("],");
  }
  static void water() {
    double y = 0, v = 0;
    System.out.print("\"swimUp\":[");
    for (int i = 0; i < 8; i++) {
      if (Math.abs(v) < 0.003) v = 0;
      v += (double)0.04f;
      y += v;
      v = v * (double)0.8f - 0.08 / 16;
      System.out.print((i == 0 ? "" : ",") + "[" + y + "," + v + "]");
    }
    System.out.println("]");
  }
  public static void main(String[] args) {
    System.out.println("{");
    ground("walk", 0.6f, false, 1f);
    ground("sprint", 0.6f, true, 1f);
    ground("ice", 0.98f, false, 1f);
    ground("soulSand", 0.6f, false, 0.4f);
    jump();
    water();
    System.out.println("}");
  }
}
