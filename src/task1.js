function area(){
    var a = document.getElementById("firstvalue").value;
    var b = document.getElementById("secondvalue").value;
    z = a * b;
    y =  (2*a) + (2*b); 
    document.getElementById("demo").innerHTML = "Area is " + z + " " + "sq. mtr."; 
    document.getElementById("demo1").innerHTML = "Perimeter is " + y + " " + "mtr";  
}
