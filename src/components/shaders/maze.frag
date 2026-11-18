precision highp float;

uniform sampler2D	uTex0;
uniform float seed;
uniform vec2 texel;
varying vec2		TexCoord0;
bool xor(bool a, bool b){
  return (a && !b) || (b && !a);
}
float rand(vec2 co){
    return fract(sin(dot(co + fract(seed), vec2(12.9898 - fract(seed/0.2), 78.233))) * 43758.5453);
}
void main( void ) {
  gl_FragColor = texture2D( uTex0, TexCoord0);
  if(gl_FragColor.r > 0.5){
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
  bool a1 = texture2D( uTex0, TexCoord0 + vec2(- texel.x,- texel.y) ).r > 0.5;
  bool a2 = texture2D( uTex0, TexCoord0 + vec2(0,-texel.y) ).r > 0.5;
  bool a3 = texture2D( uTex0, TexCoord0 + vec2(texel.x,- texel.y) ).r > 0.5;
  bool a4 = texture2D( uTex0, TexCoord0 + vec2(-texel.x,0) ).r > 0.5;
  bool a6 = texture2D( uTex0, TexCoord0 + vec2(texel.x,0) ).r > 0.5;
  bool a7 = texture2D( uTex0, TexCoord0 + vec2(- texel.x,texel.y) ).r > 0.5;
  bool a8 = texture2D( uTex0, TexCoord0 + vec2(0,texel.y) ).r > 0.5;
  bool a9 = texture2D( uTex0, TexCoord0 + vec2(texel.x,texel.y) ).r > 0.5;
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
  float _c = 0.75;
  float _n = 1.0;
  float count = (a1 ? _c : 0.0) + (a3 ? _c : 0.0)+ (a7 ? _c : 0.0)+ (a9 ? _c : 0.0)+ (a2 ? _n : 0.0)+ (a4 ? _n : 0.0)+ (a6 ? _n : 0.0)+ (a8 ? _n : 0.0);
  if( (a1 && !xor(a2,a4)) || (a3 && !xor(a2,a6)) || (a7 && !xor(a4,a8)) || (a9 && !xor(a8,a6))){
    return;
  }
  if(count < 3.5 && rand(TexCoord0) > 0.95){
    gl_FragColor = color;
  }
}