let dataContainer = document.querySelector(".dataContainer");
let loginSide=document.querySelector(".loginSide");
let store=document.querySelector(".store");
let afterHover=document.querySelector(".afterHover");

dataContainer.addEventListener("mouseover", ()=>{
    store.classList.add("hider");
    store.classList.add("afterHover");
    afterHover.classList.remove("hider");
});

dataContainer.addEventListener("mouseout", ()=> { 
    store.classList.remove("hider");
    store.classList.remove("afterHover");
    afterHover.classList.add("hider");
});



// Sign Up Section
let dataContainer2 = document.querySelector(".dataContainer2");
let store2=document.querySelector(".store2");
let afterHover2=document.querySelector(".afterHover2");

dataContainer2.addEventListener("mouseover", ()=>{
    store2.classList.add("hider");
    store2.classList.add("afterHover");
    afterHover2.classList.remove("hider");
});

dataContainer2.addEventListener("mouseout", ()=> { 
    store2.classList.remove("hider");
    store2.classList.remove("afterHover");
    afterHover2.classList.add("hider");
});
