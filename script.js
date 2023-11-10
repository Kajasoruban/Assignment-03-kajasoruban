
var modes= document.getElementById("mode");
var bgcolor=document.getElementById("bodyc");
var logcol=document.getElementById("logofun");
var menuc=document.getElementById("menu");
var ull=document.getElementById("ull");
var bla=document.getElementById("blank");


function modeChange(imgs){
    if(imgs.match(/moon/i)){
        modes.src="Assets/img/Icons/sun.svg";
        menuc.src="Assets/img/Icons/menu (1).svg";
    }else{
        modes.src="Assets/img/Icons/moon(dark).svg";
        menuc.src="Assets/img/Icons/menu.svg";
    }
    
    
    bgcolor.classList.toggle("importand");
    logcol.classList.toggle("logocol2");
    
}

function menu(){
    
    ull.classList.toggle("ullc");
    menuc.classList.toggle("men");
    bla.classList.toggle("blankon");
     
}

