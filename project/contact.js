let body = document.body;

let cursr = document.querySelector(".cursor");

body.addEventListener("mousemove",(dets)=>{
  cursr.style.top = dets.x + "px";
  cursr.style.left = dets.y + "px";  

})