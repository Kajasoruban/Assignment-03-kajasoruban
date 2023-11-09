
var modes= document.getElementById("mode");
var bgcolor=document.getElementById("bodyc");
var logcol=document.getElementById("logofun");


function modeChange(imgs){
    if(imgs.match(/moon/i)){
        modes.src="Assets/img/Icons/sun.svg";
    }else{
        modes.src="Assets/img/Icons/moon(dark).svg";
    }
    console.log(imgs);
    
    bgcolor.classList.toggle("importand");
    logcol.classList.toggle("logocol2");
    
}


