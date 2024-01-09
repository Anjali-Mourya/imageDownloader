let arr = [
    {dp:"1.jpg",story:"2.jpg"},
    {dp:"3.jpg",story:"4.jpg"},
    {dp:"5.jpg",story:"6.jpg"},
    {dp:"7.jpg",story:"8.jpg"},
    {dp:"9.jpg",story:"10.jpg"},

];

let storiyan = document.querySelector("#storiyan");

let clutter = "";
arr.forEach((elem,idx)=>{
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
}); 

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",(dets)=>{
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";

    }, 3000);
});