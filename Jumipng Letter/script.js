

const letters = document.querySelectorAll(".letters span");

letters.forEach((letters)=>{
    letters.addEventListener("click",(e)=>{
        // console.log("Clicked")
        e.target.classList.add("active");
    })
     
})