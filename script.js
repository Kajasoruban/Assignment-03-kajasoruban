
var modes= document.getElementById("mode");
var bgcolor=document.getElementById("bodyc");
var logcol=document.getElementById("logofun");


function modeChange(imgs){
    if(imgs=="http://127.0.0.1:5500/Assets/img/Icons/moon(dark).svg"){
        modes.src="Assets/img/Icons/sun.svg";
    }else{
        modes.src="Assets/img/Icons/moon(dark).svg";
    }
    
    
    bgcolor.classList.toggle("importand");
    logcol.classList.toggle("logocol2");
    
}