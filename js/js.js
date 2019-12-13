function calcularcoffe(){    
    var x=document.getElementById("coffe").value;    
    var total=x*140;    
    document.getElementById("totalcoffe").innerHTML="R$"+total+",00";
}

function calcularegeo(){    
    var x=document.getElementById("egeo").value;    
    var total=x*100;    
    document.getElementById("totalegeo").innerHTML="R$"+total+",00";
}

function calcularantonio(){    
    var x=document.getElementById("antonio").value;    
    var total=x*140;    
    document.getElementById("totalantonio").innerHTML="R$"+total+",00";
}

function calcularTotal(){    
    var a=document.getElementById("coffe").value;    
    var b=document.getElementById("egeo").value;        
    var c=document.getElementById("antonio").value;        
    var max=(parseFloat(a)*140)+(parseFloat(b)*100)+(parseFloat(c)*140);    
    document.getElementById("totalCompra").innerHTML="R$"+max+",00";
}