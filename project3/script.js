
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      
      let prev = 0; 
      return (...args) => {
        
        let now = new Date().getTime(); 
     
         
        if(now - prev> delay){ 
          prev = now;
     
          return func(...args);  
        }
      }
    }



let div = document.querySelector("#center");
div.addEventListener("mousemove",throttleFunction((dets)=>{
    // less repeatation code
    let div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX+ 'px';
    div.style.top = dets.clientY+ 'px';

    let img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1701100629891-2f1aae1efed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D");
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration: .6,
    })
    gsap.to(img,{
        y:"100%",
        delay: .6,
        ease: Power2,
    })

    setTimeout(() => {
        div.remove();
    },2000);
},400));