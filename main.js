function animate(){
        if(window.scrollY >= 10){
        document.getElementById("nav").style.backgroundColor = "white";
        for(let i=1;i<4;i++){
            document.getElementById("nav-elements"+i).style.color = "black";
        }
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        for(let i=1;i<4;i++){
            document.getElementById("nav-elements"+i).style.color = "white";
        }
    }
}

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);
    console.log(this);
});