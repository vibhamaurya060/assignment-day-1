const container=document.getElementById("container");

function createImage(){
   const image=document.createElement("img");
   image.src="image"
   image.style.border="1px solid black"
   image.style.width="100px";
   image.addEventListener("click", ()=>{
    image.style.width="150px";
    image.style.border="1px solid black";
   })
   container.append(image)
}

createImage();