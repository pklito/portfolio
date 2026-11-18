
  precision highp float;

  uniform vec2 u_resolution;
  uniform vec2 u_render_resolution;
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

  vec2 point_turbulence(vec2 x){
    return 0.5 + 0.45 * sin(u_time * 0.28 + 6.2831 * x);
  }


  void main() {
    vec2 uv = gl_FragCoord.xy / u_render_resolution.xy;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    
    vec2 x = uv * aspect * 5.;
   
    vec2 cell = floor(x);
    vec2 local = fract(x);
    float distanceToCell = 1.0;
    vec2 closest = vec2(0,0);

    for (int y = -1; y <= 1; y++) {
      for (int xOffset = -1; xOffset <= 1; xOffset++) {
        vec2 neighbor = vec2(float(xOffset), float(y));
        vec2 point = random2(cell + neighbor);
        point = point_turbulence(point);
        vec2 difference = neighbor + point - local;
        if(distanceToCell > length(difference)) closest = neighbor + cell;
        distanceToCell = min(distanceToCell, length(difference));
      }
    }

    vec2 mouse = u_mouse / u_resolution;
    mouse.y = 1.0 - mouse.y;
    float mouseDistance = distance(uv * aspect * 5., mouse * aspect * 5.);
    float cells = random(closest);
    if(mouseDistance < distanceToCell){
      cells = 0.4 + 0.3*(sin(2.*u_time));
    }

    float edgeGlow = smoothstep(0.72, 0.12, cells);

    vec3 deepBlue = vec3(0.015, 0.055, 0.18);
    vec3 electricBlue = vec3(0.07, 0.42, 0.95);
    vec3 color = mix(deepBlue, electricBlue, edgeGlow);
if(mouseDistance < distanceToCell){
  color.g += 0.15 * color.b;
  color.b -= 0.5 * color.g;
}
    

    float grain = random(gl_FragCoord.xy + u_time) * 0.025;
    gl_FragColor = vec4(color + grain, 1.0);
  }