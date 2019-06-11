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
        for(let i=1;i<6;i++){
            document.getElementById("nav-elements"+i).style.color = "black";
        }
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        for(let i=1;i<6;i++){
            document.getElementById("nav-elements"+i).style.color = "white";
        }
    }
}

function animate() {
    if(scrollState>320 && scrollState<950) {
        translate(1);
    }else if (scrollState>950) {
        translate(2);
    }
}

function translate(i){
    document.getElementById("fig"+i).style.transitionDuration = "3s";
    document.getElementById("fig"+i).style.transform = "translateY(-150px)";
    document.getElementById("fig"+i).style.opacity ="1";
    document.getElementById("arti"+i).style.transitionDuration = "2s";
    document.getElementById("arti"+i).style.transform = "translateY(-150px)";
    document.getElementById("arti"+i).style.opacity ="1";
}