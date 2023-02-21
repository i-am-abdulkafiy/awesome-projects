function openMenu(){
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px";
    document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeMenu(){
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
    document.querySelector("body").style.backgroundColor = "transparent";
}