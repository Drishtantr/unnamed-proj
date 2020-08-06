
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

function videoclick(obj){
    document.getElementById('mycontainer').style.display='inline';
    var myvideo = document.getElementById('match');
    var reader = new FileReader();
    reader.onload = (function(video) {return function(e) {video.src = e.target.result;};})(myvideo);
    reader.addEventListener('load', function() {
      myvideo.play()
    });
    reader.readAsDataURL(obj.files[0]);
  
}
