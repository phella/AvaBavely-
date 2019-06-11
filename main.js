let scrollState;
let maxScroll=0;
function scrolling(){
    scrollState = window.scrollY;
    console.log(scrollState);
    if(scrollState>maxScroll)
    {
        animate();
    }
    if(scrollState > maxScroll){
        maxScroll = scrollState;
    }
    navColor();
}
function navColor() {
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

function animate() {
    if(scrollState>320) {
        document.getElementById("fig1").style.transitionDuration = "3s";
        document.getElementById("fig1").style.transform = "translateY(-150px)";
        document.getElementById("fig1").style.opacity ="1";
        document.getElementById("arti1").style.transitionDuration = "2s";
        document.getElementById("arti1").style.transform = "translateY(-150px)";
        document.getElementById("arti1").style.opacity ="1";
    }
}