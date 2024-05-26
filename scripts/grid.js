const topL = document.querySelector("#top");
const middleL = document.querySelector("#middle");
const bottomL = document.querySelector("#bottom");

const listIndex = document.querySelector(".listIndex");

const calcText = document.querySelector(".calcText");
const menuMobile = document.querySelector("#moblilCont");
const calcDesktop = document.querySelector(".calcDesktop");

calcText.addEventListener("click", showHide);
menuMobile.addEventListener("click", showHide);

function showHide(){
    listIndex.classList.toggle("listIndexShow");
    calcDesktop.classList.toggle("calcDesktopShow");
    if(listIndex.classList.contains("listIndexShow")){
        topL.classList.add("cross2");
        middleL.classList.add("cross");
        bottomL.classList.add("cross3");
        listIndex.scrollTop = 0;
    }else{
        topL.classList.remove("cross2");
        middleL.classList.remove("cross");
        bottomL.classList.remove("cross3");
    }
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
};
