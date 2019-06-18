const carousalImgNo = 3;
const descriptions = ['حفله &nbsp; 2','حفله &nbsp; 1','حفله &nbsp; 0'];
const days = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thusday' , 'Friday','Saturday'];
const reservedDays = {training:[1,3,10,20],show:[5,25]};
let Modal = false;
let scrollState;
let maxScroll=0;

document.onkeydown = function (event) {
    if(event.key === "Escape") {
        if(Modal){
            closeModal();
        }
    }
}

const createCalender = (function () {
    // days at header
    let el = document.createElement("tr");
    for(let i=0;i<7;i++){
        let th = document.createElement("th");
        th.innerHTML = days[i];
        el.appendChild(th);
    }
    document.getElementById("table").appendChild(el);
    // numbers in rows
    const date = new Date();
    let day = date.getDay() - date.getDate()%7+1;
    day = day>0 ? day:day+7;
    let counter = 1;
    while(counter<31) {
      let tr = document.createElement("tr");
      for(let j = 0 ;j<7;j++) {
        let td = document.createElement("td");
        let div = document.createElement("div");
        div.className = "day";
        if(day <= 0 && counter < 31){
            if(reservedDays.training.indexOf(counter) !== -1){
                td.innerHTML = "بروفه";
            } else if (reservedDays.show.indexOf(counter)!== -1 ) {
                td.innerHTML = "عرض";
            }
            div.innerHTML = counter;
            counter++;
        }
        td.appendChild(div);
        tr.appendChild(td);
        day--;
      }
      document.getElementById("table").appendChild(tr);  
    }
})();

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
        for(let i=1;i<5;i++){
            document.getElementById("nav-elements"+i).style.color = "black";
        }
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        for(let i=1;i<5;i++){
            document.getElementById("nav-elements"+i).style.color = "white";
        }
    }
}

function animate() {
    if(scrollState>320 && scrollState<950) {
        translate(1);
    }else if (scrollState>950 && scrollState <1470) {
        translate(2);
    }else if(scrollState>1470){
        translate(3);
    }
}

function translate(i){
    if(i<3){
        document.getElementById("fig"+i).style.transitionDuration = "3s";
        document.getElementById("fig"+i).style.transform = "translateY(-150px)";
        document.getElementById("fig"+i).style.opacity ="1";
        document.getElementById("arti"+i).style.transitionDuration = "2s";
        document.getElementById("arti"+i).style.transform = "translateY(-150px)";
        document.getElementById("arti"+i).style.opacity ="1";
    } else {
        document.getElementById("carousal-section").style.transitionDuration = "3s";
        document.getElementById("carousal-section").style.transform = "translateY(-10px)";
        document.getElementById("carousal-section").style.opacity ="1";
    }
}

// -1 means shift rigth and 1 means shift left
function carousal(x) {
    document.getElementById("arr"+(x+1)).style.backgroundColor="#d3dcea";
    document.getElementById("arr"+(x+1)).style.transition="0.4s";
    setTimeout(()=>{
        document.getElementById("arr"+(x+1)).style.backgroundColor="white";
    },400);
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
            document.getElementById("des"+i).innerHTML=descriptions[str2] ;
            document.getElementById("car"+i).src = str.slice(0,str.length-5)+str2+'.jpg';
        }, 300);
    }
}

function openModal(el) {
    if(!Modal){
        document.getElementById("modal").style.display = "block";
        const cln = el.cloneNode(true);
        var parent = document.createElement("div");
        parent.style.display = "inline-block";
        parent.id = 'modal-contant';
        parent.append(cln);
        document.getElementById("modal").appendChild(parent);
        Modal = true;
    }
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-contant").remove();
    Modal = false;
}
