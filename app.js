
/*below function to DISPLAY floating window on screen when Or YouTube Video button pressed*/
function openWindow(){
    var x = document.getElementById("floatwindow");
    y = x.style.display = 'block';
    return y;
}

/*below function to HIDE floating window on screen when cross button is pressed*/
function closeWindow(){
    var x = document.getElementById("floatwindow");
    y = x.style.display = 'none';
    return y;
}