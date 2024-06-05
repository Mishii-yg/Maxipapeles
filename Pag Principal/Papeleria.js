var modal_C2625fc0305e14b238944001ea6f1315b = document.getElementById('myModal_C2625fc0305e14b238944001ea6f1315b');
var img_C2625fc0305e14b238944001ea6f1315b= document.getElementById('C2625fc0305e14b238944001ea6f1315b');
var modalImg_C2625fc0305e14b238944001ea6f1315b = document.getElementById("myImage_C2625fc0305e14b238944001ea6f1315b");
var captionText_C2625fc0305e14b238944001ea6f1315b= document.getElementById("caption_C2625fc0305e14b238944001ea6f1315b");
img_C2625fc0305e14b238944001ea6f1315b.onclick = function(){
modal_C2625fc0305e14b238944001ea6f1315b.style.display = "block";
modalImg_C2625fc0305e14b238944001ea6f1315b.src = this.src;
captionText_C2625fc0305e14b238944001ea6f1315b.innerHTML = this.alt;
captionText_C2625fc0305e14b238944001ea6f1315b.innerHTML += '<br><a href=""></a>';
}
var span_C2625fc0305e14b238944001ea6f1315b = document.getElementsByClassName("close_C2625fc0305e14b238944001ea6f1315b")[0];
span_C2625fc0305e14b238944001ea6f1315b.onclick = function() {
modal_C2625fc0305e14b238944001ea6f1315b.style.display = "none";
}
if (navigator.platform.indexOf("Win") != -1)
{
$(".windows-show").show();
}
if (navigator.platform.indexOf("Mac") != -1)
{
$(".mac-show").show();
}
if (navigator.platform.indexOf("Mac")==-1 && navigator.platform.indexOf("Win") ==-1)
{
$(".others-show").show();
}
if (navigator.platform.indexOf("Win") == -1)
{
$(".non-windows-show").show();
}
