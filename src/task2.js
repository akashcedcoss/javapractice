function calculation(){
    var a = document.getElementById("val").value;
    x = 60 * a;
    y = 3600 * a;
    if(document.getElementById("radio1").checked){
    document.getElementById("calculate").innerHTML=  a + " hours = " + x + " mins";
}
    else if(document.getElementById("radio2").checked){
    document.getElementById("calculate").innerHTML= a + " hours = " + y + " seconds" ;
}
else{
    document.getElementById("calculate").innerHTML= "Wrong Input";
}
}