let body = document.querySelector("body");

let crsr = document.querySelector(".cursor");

body.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px"; 

});

const form = document.getElementById("signupForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value;
     

    const URL = "https://jsonplaceholder.typicode.com/posts";

    fetch(URL,{
        method: "POST",
        body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password}),
        headers:{
          "Content-Type": "application/json"
        }
    })
    .then((response)=>{
        if(response.ok){
            alert("Login successfull");
        }else{
            alert("login failed please try again later");
        }
    })
    .catch((error)=>{
        alert("An error occurred. Please try again later.")
    });
});