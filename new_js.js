var menu = document.getElementsByClassName("menu");
menu.style.maxHeight = "0px";
function togglemenu(){
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "130px";
    }
    else
    {
        menu.style.maxHeight = "0px";
    }
}