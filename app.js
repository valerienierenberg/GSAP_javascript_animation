const navButton = document.querySelector('.nav-button');
// to remove and add the pointer events according to whether the nav bar is activated or not
const navOpen = document.querySelector('.nav-open');

// the following creates a basic animation...
// to method: to(object to move, time to animate, {animation})
// const tween = TweenLite.to('.cover', 1, {
//    width: "40%"
// });

// paused so that it doesn't automatically animate
const tl = new TimelineLite({ paused : true, reversed: true });

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
// start the animation .5 seconds before the first one finishes
}, '-= 0.5')
.fromTo('.nav-open', 0.5, {
    opactiy: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0,
    // will only run when animation is complete
    onComplete : function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
        }
    }
);

navButton.addEventListener('click', (e) => {
    // if animation is already running, you cannot click again to reverse it until it's finished
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    // check if reversed
    toggleTween(tl)
});


function toggleTween(tween){
    // if true, play. else, reverse
    tween.reversed() ? tween.play() : tween.reverse();
}