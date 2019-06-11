let scrollState;
let maxScroll=0;
function scrolling(){
    scrollState = window.scrollY;
    if(scrollState > maxScroll){
        maxScroll = scrollState;
    }
    navColor();
}
function navColor(){
        if(scrollState >= 10){
        document.getElementById("nav").style.backgroundColor = "white";
        for(let i=1;i<4;i++){
            document.getElementById("nav-elements"+i).style.color = "black";
        }
        document.getElementById("nav-elements3").style.color = "blue";
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        for(let i=1;i<4;i++){
            document.getElementById("nav-elements"+i).style.color = "white";
        }
    }
}
