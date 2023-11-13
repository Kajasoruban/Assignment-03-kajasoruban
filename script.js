
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

function zoom(element){
    element.classList.toggle("zoomin");
}
//start active in nav

const activef= e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

}
const act= document.querySelectorAll("#ull a");
act.forEach(link => link.addEventListener("click", activef));


//end active in nav

// start drag scroll

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.carousels');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  
}

const stopDragging = (e) => {
  mouseDown = false;
  
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
  
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

// end scroll


// start of products filter

const filtbuttons =document.querySelectorAll(".product-title button");
const filtproducts =document.querySelectorAll(".products .card");


const filterproduct = e =>{
  document.querySelector(".active2").classList.remove("active2");
  e.target.classList.add("active2");


  filtproducts.forEach(card => {
    card.classList.add("hide");

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "featured") {
      card.classList.remove("hide");
      
    };

  });
};

filtbuttons.forEach(button => button.addEventListener("click", filterproduct))
// end of products filter

// start of faqsection

const faqsec = document.querySelectorAll(".faqs-section li");


// const faqs =(q)=>{
//    q.classList.toggle("active3")
// }

// faqsec.forEach(q => q.addEventListener("click",faqs(e)))


faqsec.forEach(faqs =>{
  faqs.addEventListener("click", () =>{
    faqs.classList.toggle("active3");
  })
});


// end of faqsection


// start of team 

var butn = document.getElementsByClassName("butn");
var teams =document.getElementById("teamcardsid");

butn[0].onclick = function(){
  teams.style.transform="translateX(0px)";
  for(i=0;i<3;i++){
    butn[i].classList.remove("active4");
  }
  this.classList.add("active4");
}
butn[1].onclick = function(){
  teams.style.transform="translateX(-750px)";
  for(i=0;i<3;i++){
    butn[i].classList.remove("active4");
  }
  this.classList.add("active4");
}
butn[2].onclick = function(){
  teams.style.transform="translateX(-1100px)";
  for(i=0;i<3;i++){
    butn[i].classList.remove("active4");
  }
  this.classList.add("active4");
}



// end of team 