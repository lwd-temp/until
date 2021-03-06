// == shit =====================================================================
#extension GL_EXT_draw_buffers : require

// == varyings =================================================================
varying vec3 vPos;
varying vec3 vNor;
varying vec4 vCol;

// == uniforms =================================================================
uniform bool isShadow;

// == main =====================================================================
void main() {
  if ( isShadow ) {
    gl_FragData[ 0 ] = vec4( calcDepthL( vPos - lightPos ), 0.0, 0.0, 1.0 );
    return;
  }

  gl_FragData[ 0 ] = vec4( vPos, 1.0 );
  gl_FragData[ 1 ] = vec4( vNor, 1.0 );
  gl_FragData[ 2 ] = vCol;
}