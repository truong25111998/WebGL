function kiemtra(){
    var chekbox=document.getElementById("ckek");
    if (chekbox.checked == false)
        document.bgColor = "white";
    else
        document.bgColor = "black";

}
// window.onclick= 
function check(){
    document.getElementById("hoten").innerHTML=  myfrom.name.value;
   document.getElementById("dc").innerHTML=myfrom.addres.value;
   document.getElementById("SĐT").innerHTML=myfrom.sdt.value;
   document.getElementById("root").style.display="block";
   document.getElementById("root1").style.display="none";

}
var VSHADER_SOURCE=
    'void main(){\n'+
    'gl_Position =vec4(0.0,0.0,0.0,1.0);\n'+
    'gl_PointSize=10.0;\n'+'}\n';
var FSHADER_SOURCE = 
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';
function main(){
    var canvas= document.getElementById("example");

//định nghĩa đồ họa 2 chiều cho canvas
// var ctx=  canvas.getContext("2d");
// ctx.fillStyle= 'rgba(0,0,255,1.0)';
// ctx.fillRect(120,10,150,150);
//tao ngữ cảnh 3D
var gl = getWebGLContext(canvas);
if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

// var gl =canvas.getContext("webgl");
gl.clearColor(0.0 , 0.0 , 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.POINTS,0,1);
}