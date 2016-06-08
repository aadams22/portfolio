window.onload = function() {
  var mousemove = null;



  document.onmousemove = function (e) {
  var x = e.clientX - innerWidth/2,
      y = e.clientY - innerHeight/2,
      yawn = x / innerWidth * 180,
      pitch = y / innerHeight * 180;
      mousemove = e;

  document.querySelector('#cube .front').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (0+yawn) +'deg ) translateZ( 100px )';
  document.querySelector('#cube .back').style.transform = 'rotateX( '+ (180+pitch) +'deg ) rotateY( '+ (0-yawn) +'deg ) translateZ( 100px )';
  document.querySelector('#cube .right').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (90+yawn) +'deg ) translateZ( 100px )';
  document.querySelector('#cube .left').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (-90+yawn) +'deg ) translateZ( 100px )';
  document.querySelector('#cube .top').style.transform = 'rotateX( '+ (90+pitch) +'deg ) rotateZ( '+ (0-yawn) +'deg ) translateZ( 100px )';
  document.querySelector('#cube .bottom').style.transform = 'rotateX( '+ (-90+pitch) +'deg ) rotateZ( '+ (0+yawn) +'deg ) translateZ( 100px )';

  };



  document.querySelector('#projects').onclick = function(e){
    console.log('clicked', mousemove);
    if(mousemove.stopPropagation) mousemove.stopPropagation();
    if(mousemove.preventDefault) mousemove.preventDefault();
    mousemove.cancelBubble=true;
    mousemove.returnValue=false;
    return false;
  };



};









