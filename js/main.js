var menu_btn = document.getElementById("menuBtn");
var circleOne = document.getElementById("circleOne");
var circleTwo = document.getElementById("circleTwo");
var banner = document.getElementById("banner");
var search = document.getElementById("search");
var searchBox = document.getElementById("searchBox");
var diameterValue = (Math.sqrt(Math.pow(320, 2) + Math.pow(568, 2)) * 2);
var cGroup = document.querySelectorAll('.c1');
var slide = document.querySelectorAll('.slide');
var lineOne = document.getElementById('lineOne');
var lineTwo = document.getElementById('lineTwo');
var lineThree = document.getElementById('lineThree');
var header_tl = new TimelineMax({
    paused: true
});
var header_tl_two = new TimelineMax({
    paused: true
});
var content_tl = new TimelineMax({
    paused: true
});

function init() {
    cir_init();
    headerAnimation();
}
init();
menuBtn.addEventListener('click', function() {
    if (menu_btn.classList.contains('open')) {
        header_tl.play();
        menu_btn.classList.remove('open');
        menu_btn.classList.add('close');
        navCir();
    }
    else if (menu_btn.classList.contains('close')) {
        header_tl.reverse();
        menu_btn.classList.add('open');
        menu_btn.classList.remove('close');
        navCirRemove();
    }
    else if (menu_btn.classList.contains('closeCir')) {
        TweenMax.to(circleTwo, 0.6, {
            scaleX: 0,
            scaleY: 0,
            opacity: 1,
            x: -50,
            y: -50
        });
        header_tl_two.reverse();
        TweenMax.to(searchBox,0.4,{width:'0%',left:'5%',right:'auto',opacity:0});
        menu_btn.classList.remove('closeCir');
        menu_btn.classList.add('open');
    }
});

search.addEventListener('click', function() {
    menu_btn.classList.remove('open');
    menu_btn.classList.add('closeCir');
    header_tl_two.play();
    TweenMax.to(searchBox,0.4,{width:'90%',right:'5%',left:'auto',opacity:1});
    TweenMax.to(circleTwo, 0.6, {
        scaleX: diameterValue / 78,
        scaleY: diameterValue / 78,
        x: 0,
        y: 0,
        left: 'auto',
        rigth: 0,
        top: 0,
        opacity: 1,
        onComplete: completeAnimation
    });
});

for (var i = 0; i < cGroup.length; i++) {
    cGroup[i].addEventListener('click', function() {
        header_tl.reverse();
        content_tl.restart();
        navCirRemove();
        menu_btn.classList.remove('close');
        menu_btn.classList.add('open');
    });
};

function cir_init() {
    TweenMax.to(circleOne, 0.5, {
        width: diameterValue + 'px',
        height: diameterValue + 'px',
        top: -diameterValue / 2 + 'px',
        left: -diameterValue / 2 + 'px',
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        zIndex: 3
    });
  content_tl.to(banner,0.4,{height:'30%',delay:0.6}).staggerTo(slide,0.4,{width:'100%'},0.1);

}

function headerAnimation() {
    header_tl.to(lineThree, 0.1, {
        width: 0
    }, "0").to(lineOne, 0.3, {
        rotation: 45,
        y: 0
    }, "0").to(lineTwo, 0.3, {
        rotation: -45,
        y: -10
    }, "0").to(circleOne, 0.5, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
    });
    header_tl_two.to(lineOne, 0.1, {
        opacity: 0
    }, "0").to(lineTwo, 0.3, {
        rotation: 47
    }, "0").to(lineThree, 0.3, {
        rotation: -47
    }, "0");
}

function completeAnimation() {
    TweenMax.to(circleTwo, 0.1, {
        left: 0,
        top: 0,
        right: 0
    });
}
function navCir(){
  TweenMax.staggerTo(cGroup, 0.4, {
      scale: 1,
      opacity: 1,
      ease: Bounce.easeOut,
      delay:0.5
  }, 0.1);
}
function navCirRemove(){
  TweenMax.staggerTo(cGroup, 0, {
      scale: 0,
      opacity: 1
  }, 0);
}
function searcBox(){

}
