const carousalImgNo = 3;
const descriptions = ['حفله &nbsp; 2','حفله &nbsp; 1','حفله &nbsp; 0'];
let scrollState;
let maxScroll=0;
function scrolling(){
    scrollState = window.scrollY;
    console.log(scrollState);
        animate();
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

function carousal(x) {
    for(let i =0 ; i<3 ;i++){
        let str = document.getElementById("car"+i).src;
        let str2 = str;
        const id =(+str2.slice(-5,-4) + x)%carousalImgNo;
        str2 = id>-1? id: carousalImgNo -1 ;
        document.getElementById("car"+i).style.opacity ="0";
        document.getElementById("des"+i).style.opacity="0" ;
        document.getElementById("car"+i).style.transitionDuration = "0.3s";
        document.getElementById("des"+i).style.transitionDuration = "0.3s";
        setTimeout(()=>{
            document.getElementById("car"+i).style.opacity ="1";
            document.getElementById("des"+i).style.opacity ="1";
            document.getElementById("des"+i).innerHTML=descriptions[id] ;
            document.getElementById("car"+i).src = str.slice(0,str.length-5)+str2+'.jpg';
        }, 300);
    }
}