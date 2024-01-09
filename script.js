let body = document.querySelector("body");

let crsr = document.querySelector(".cursor");

body.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px"; 

});


const searchReasult = document.querySelector("#myDropDown");
const inputBox = document.querySelector("#inputbox");

inputBox.addEventListener("keyup",()=>{
    searchReasult.style.display = "block";
    setTimeout(() => {
    searchReasult.style.display = "none";
    }, 20000);
});


const myFunction = ()=>{
    const filter = inputBox.value.toUpperCase();
    const ul = document.getElementById("myUl");
    const li = ul.getElementsByTagName("li");
    for(let i=0; i< li.length; i++){
    const  a = li[i].getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
    }else{
        li[i].style.display = "none";
    }
    }
}
inputBox.addEventListener("keyup",myFunction);


//  for like button
const img = document.querySelectorAll(".divBox");
const love = document.querySelector(".love");

 img.forEach((box)=>{
    box.addEventListener("dblclick",()=>{
        console.log("hlo");
        love.style.transform =  "translate(-50%,-50%)scale(1)";
        love.style.opacity = 0.8;

        setTimeout(() => {
        love.style.opacity = 0;
        }, 1000);
        setTimeout(() => {
            love.style.transform =  "translate(-50%,-50%)scale(0)";
        }, 2000);
    });
    
 });

const icon = document.querySelectorAll(".bi bi-download");

 function downloadFile(URL,fileName){
    let link = document.createElement("a");

    link.setAttribute("download",fileName);
    link.href = URL;

    document.body.appendChild(link);
    link.click();
    link.remove();
 }

const i = document.querySelector(".box i");
const myBody = document.body;


i.addEventListener("click",()=>{
    
})
