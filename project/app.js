const searchBox = document.querySelector(".search-box");
const searchResult = document.querySelector(".search-result");
const inputBox = document.querySelector("#inputbox");

inputBox.addEventListener("click",()=>{
    searchResult.classList.add("hide");
})

