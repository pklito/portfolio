precision highp float;

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform vec2 u_image_resolution;
uniform float u_time;
uniform vec2 u_mouse;

varying vec2 v_uv;

vec2 getCoverUV(vec2 uv, vec2 canvasRes, vec2 imgRes) {
    if (imgRes.x <= 0.0 || imgRes.y <= 0.0 || canvasRes.x <= 0.0 || canvasRes.y <= 0.0) {
        return uv;
    }
    vec2 s = canvasRes / imgRes;
    float maxS = max(s.x, s.y);
    vec2 newContent = imgRes * maxS;
    vec2 offset = (newContent - canvasRes) / (2.0 * newContent);
    return uv * (canvasRes / newContent) + offset;
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(
      dot(p, vec2(127.1, 311.7)),
      dot(p, vec2(269.5, 183.3))
    )) * 43758.5453);
  }
// Method 3: Subtle dither / grain dissolve
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

vec2 voronoi(vec2 x){
    vec2 cell = floor(x);
    vec2 local = fract(x);
    float distanceToCell = 1.0;
    vec2 closest = vec2(0,0);

    for (int y = -1; y <= 1; y++) {
      for (int xOffset = -1; xOffset <= 1; xOffset++) {
        vec2 neighbor = vec2(float(xOffset), float(y));
        vec2 point = random2(cell + neighbor);
        vec2 difference = neighbor + point - local;
        if(distanceToCell > length(difference)) closest = neighbor + cell;
        distanceToCell = min(distanceToCell, length(difference));
      }
    }
    return closest;
}

vec2 deform(vec2 x){
    return x;
}

vec2 reform(vec2 x){
    return x;
}

void main() {
    
    vec2 imgUV = getCoverUV(v_uv, u_resolution, u_image_resolution);
    vec2 base = voronoi(5.*imgUV);
    vec4 texColor = vec4(0.0);

    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 c = base + vec2(float(i), float(j));
        vec2 d = (-random2(c) * vec2(1., 0.3)) * 0.1;
        d = smoothstep(0.3, -0.3, c.x) *d;
        vec2 q = imgUV - d;
        q = 0.9*(q - c) + c;
        if (voronoi(5.*q) == c) {
            texColor = vec4(0.99*q, 0., 1.);
        }
      }
    }
    
    gl_FragColor = vec4(texColor.rgb, texColor.a);
}
