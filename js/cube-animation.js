

//possibly use the jquery Draggable to change this to a draggable feature instead of a onmousemove

if (document.querySelector('#cube'))

document.onmousemove = function (e) {
    var x = e.clientX - innerWidth/2,
        y = e.clientY - innerHeight/2,
        yawn = x / innerWidth * 180,
        pitch = y / innerHeight * 180;

    document.querySelector('#cube .front').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (0+yawn) +'deg ) translateZ( 100px )';
    document.querySelector('#cube .back').style.transform = 'rotateX( '+ (180+pitch) +'deg ) rotateY( '+ (0-yawn) +'deg ) translateZ( 100px )';
    document.querySelector('#cube .right').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (90+yawn) +'deg ) translateZ( 100px )';
    document.querySelector('#cube .left').style.transform = 'rotateX( '+ (0+pitch) +'deg ) rotateY( '+ (-90+yawn) +'deg ) translateZ( 100px )';
    document.querySelector('#cube .top').style.transform = 'rotateX( '+ (90+pitch) +'deg ) rotateZ( '+ (0-yawn) +'deg ) translateZ( 100px )';
    document.querySelector('#cube .bottom').style.transform = 'rotateX( '+ (-90+pitch) +'deg ) rotateZ( '+ (0+yawn) +'deg ) translateZ( 100px )';
    
};



