import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Edit this string to experiment with the background fragment shader.
export const FRAGMENT_SHADER = `
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
`;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function VoronoiShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Shader link error:", gl.getProgramInfoLog(program));
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const mouse = gl.getUniformLocation(program, "u_mouse");
    const time = gl.getUniformLocation(program, "u_time");
    const pointer = { x: -1000, y: -1000 };
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const onPointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const render = (timestamp: number) => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = Math.round(bounds.width * dpr);
      const height = Math.round(bounds.height * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
      gl.useProgram(program);
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(mouse, pointer.x * dpr, pointer.y * dpr);
      gl.uniform1f(time, timestamp * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    canvas.parentElement?.addEventListener("pointermove", onPointerMove);
    canvas.parentElement?.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      canvas.parentElement?.removeEventListener("pointermove", onPointerMove);
      canvas.parentElement?.removeEventListener("pointerleave", onPointerLeave);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full bg-[#06123d]"
      aria-hidden="true"
    />
  );
}
