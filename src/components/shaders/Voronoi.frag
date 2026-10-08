
  precision highp float;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  float random(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  vec2 random2(vec2 p) {
    return fract(sin(vec2(
      dot(p, vec2(127.1, 311.7)),
      dot(p, vec2(269.5, 183.3))
    )) * 43758.5453);
  }

  float voronoi(vec2 x) {
    vec2 cell = floor(x);
    vec2 local = fract(x);
    float distanceToCell = 1.0;

    for (int y = -1; y <= 1; y++) {
      for (int xOffset = -1; xOffset <= 1; xOffset++) {
        vec2 neighbor = vec2(float(xOffset), float(y));
        vec2 point = random2(cell + neighbor);
        point = 0.5 + 0.45 * sin(u_time * 0.28 + 6.2831 * point);
        vec2 difference = neighbor + point - local;
        distanceToCell = min(distanceToCell, length(difference));
      }
    }

    return distanceToCell;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    float cells = voronoi(uv * aspect * 5.0);
    float edgeGlow = smoothstep(0.72, 0.12, cells);

    vec3 deepBlue = vec3(0.015, 0.055, 0.18);
    vec3 electricBlue = vec3(0.07, 0.42, 0.95);
    vec3 color = mix(deepBlue, electricBlue, edgeGlow);

    vec2 mouse = u_mouse / u_resolution;
    mouse.y = 1.0 - mouse.y;
    float mouseDistance = distance(uv * aspect, mouse * aspect);
    float mouseShadow = smoothstep(0.42, 0.02, mouseDistance);
    color *= 1.0 - mouseShadow * 0.78;

    float grain = random(gl_FragCoord.xy + u_time) * 0.025;
    gl_FragColor = vec4(color + grain, 1.0);
  }