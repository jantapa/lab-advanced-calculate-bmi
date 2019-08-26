function calbmi(){

    var h = +(document.getElementById("h").value);
    var w = +(document.getElementById("w").value);
     
    var h = h/100.0;

    var out = (w/(h*h)).toFixed(2);

    document.getElementById("output").innerHTML = "<h1> output:  "+out+" </h1>";


}