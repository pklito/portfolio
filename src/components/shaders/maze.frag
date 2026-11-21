precision highp float;

uniform sampler2D	uTex0;
uniform float seed;
uniform vec2 texel;
varying vec2		TexCoord0;
uniform vec2 u_mouse;

uniform vec4 topColor;

vec3 hexToRgb(float hex) {
    float r = floor(hex / 65536.0);
    float g = floor((hex - r * 65536.0) / 256.0);
    float b = hex - r * 65536.0 - g * 256.0;
    return vec3(r, g, b) / 255.0;
}

// Usage:


bool xor(bool a, bool b){
  return (a && !b) || (b && !a);
}
float rand(vec2 co){
    return fract(sin(dot(co + fract(seed), vec2(12.9898 - fract(seed/0.2), 78.233))) * 43758.5453);
}

float lerp(float a, float b, float u){
  return (1.-u)*a + u*b;
}

const float red_thresh = 0.5;
void main( void ) {
  vec4 topColorFallback = vec4(hexToRgb(float(0xE9E5DC)),1.);
  if(dot(topColor,topColor) > 0.4){
    topColorFallback = topColor;
  }
  gl_FragColor = texture2D( uTex0, TexCoord0);
  if(gl_FragColor.r > red_thresh){
    return;
  }
  vec2 point = vec2(rand(vec2(1,1)),rand(vec2(3,3)));
  vec2 goal =  point - TexCoord0;
  bool lr = point.x > point.y;
  if( (fract(goal.x/(2.0*texel.x))< 0.3 && lr) || (!lr && fract(goal.y/(3.0*texel.y)) < 0.3)){
  }
  else{
    return;
  }
  bool a1 = texture2D( uTex0, TexCoord0 + vec2(- texel.x,- texel.y) ).r > red_thresh;
  bool a2 = texture2D( uTex0, TexCoord0 + vec2(0,-texel.y) ).r > red_thresh;
  bool a3 = texture2D( uTex0, TexCoord0 + vec2(texel.x,- texel.y) ).r > red_thresh;
  bool a4 = texture2D( uTex0, TexCoord0 + vec2(-texel.x,0) ).r > red_thresh;
  bool a6 = texture2D( uTex0, TexCoord0 + vec2(texel.x,0) ).r > red_thresh;
  bool a7 = texture2D( uTex0, TexCoord0 + vec2(- texel.x,texel.y) ).r > red_thresh;
  bool a8 = texture2D( uTex0, TexCoord0 + vec2(0,texel.y) ).r > red_thresh;
  bool a9 = texture2D( uTex0, TexCoord0 + vec2(texel.x,texel.y) ).r > red_thresh;
  vec4 color = vec4(1,1,1,1);
  // vec4 color = texture( uTex0, TexCoord0 + vec2(- texel.x,- texel.y) ) + texture( uTex0, TexCoord0 + vec2(0,-texel.y) ) + texture( uTex0, TexCoord0 +
  //  vec2(texel.x,- texel.y) ) + texture( uTex0, TexCoord0 + vec2(-texel.x,0) ) + texture( uTex0, TexCoord0 + vec2(-texel.x,0) ) +
  //   texture( uTex0, TexCoord0 + vec2(texel.x,0) ) + texture( uTex0, TexCoord0 + vec2(- texel.x,texel.y) ) + texture( uTex0, TexCoord0 + vec2(0,texel.y) )
  //   + texture( uTex0, TexCoord0 + vec2(texel.x,texel.y) );
  //   color = color / 8;
  //   color = vec4(1) - color;
  //   //color.r = 1;
  //   color.a = 1;
  color.g = 1.0/(seed*seed+1.0);
  color.b = 1.0/(1.0+seed*seed);
  
  color.g = lerp(color.g, topColorFallback.g, smoothstep(0.9, 1., TexCoord0.y + 0.2+0.2*sin(2.1*TexCoord0.x)));
  color.b = lerp(color.b, topColorFallback.b, smoothstep(0.9, 1., TexCoord0.y + 0.15+0.15*cos(1.4+1.1*TexCoord0.x)));
  if(topColorFallback.r > red_thresh){
    color.r = lerp(color.r, topColorFallback.r, smoothstep(0.95, 1., TexCoord0.y + 0.04+0.004*sin(2.1*TexCoord0.x)));
  }
  float _c = 0.75;
  float _n = 1.0;
  float count = (a1 ? _c : 0.0) + (a3 ? _c : 0.0)+ (a7 ? _c : 0.0)+ (a9 ? _c : 0.0)+ (a2 ? _n : 0.0)+ (a4 ? _n : 0.0)+ (a6 ? _n : 0.0)+ (a8 ? _n : 0.0);
  float b1 = smoothstep(1.0,0.85,TexCoord0.y);
  float b2 = smoothstep(0.6,0.0,TexCoord0.y);
  float amt = ((1.-b1)*10. + b1*3.5)*(1.-b2) + b2*(0.0); 
  float odds = ((1.-b1)*0. + b1*0.95)*(1.-b2) + b2*(1.0); 
  if(rand(TexCoord0 + vec2(1., 4.)) < odds + 0.5){
  if( (a1 && !xor(a2,a4)) || (a3 && !xor(a2,a6)) || (a7 && !xor(a4,a8)) || (a9 && !xor(a8,a6))){
    return;
  }
  }
  

  if(count < amt && rand(TexCoord0) > odds){
    gl_FragColor = color;
  }
}