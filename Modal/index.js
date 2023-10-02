
function getElement(val){
    return document.querySelector(val);
}

const overlay = getElement(".overlay");
const close_icon = getElement(".close_icon");
const accept_offer = getElement(".accept_offer");
const show_offer = getElement(".show_offer");

overlay.addEventListener("click", (event)=>{
    let ele = event.target;
    const isOverlay = ele.classList.contains("overlay");
    const isCloseIcon = ele.classList.contains("close_icon");
    const isAcceptOffer = ele.classList.contains("accept_offer");
    if(isOverlay || isCloseIcon || isAcceptOffer){
        overlay.classList.add("hide");
    }
});


show_offer.addEventListener("click", ()=>{
    overlay.classList.remove("hide");
});

accept_offer.addEventListener("click", ()=>{
    show_offer.remove();
    const body = getElement("body");
    const span = document.createElement("span");
    span.textContent = "Offer accepted";
    body.appendChild(span);
});

