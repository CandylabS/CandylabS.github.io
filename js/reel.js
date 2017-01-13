$(document).ready(function() {

  //// VIMEO–player API //
  // var idPlayer = new Vimeo.Player('video');
  // idPlayer.pause();
  // setTimeout(function() {
  //   idPlayer.pause();
  // }, 1000); //SAFARI  play on -load BUG


  var RP_cont = $(".reel-player-cont"),
    rp_h1 = $(".player-bar-top h1"),
    rp_h2 = $(".player-bar-top h2"),
    h1_h2 = $(".player-bar-top h1, .player-bar-top h2"),
    rp_BTM = $(".player-bar-btm"),
    Vol_cont = $(".volume-slide-cont"),
    vol_prog = $(".volume-slide-cont .progress"),
    vol_handle = $(".volume-slide-cont .handle"),
    center_button = $(".center-button"),
    btm_right = $(".btm-right-cont"),
    Play_SVG = $("#Play-SVG-Circle"),
    i_fullscreen = $(".i-fullscreen"),
    video_BG = $(".video-BG"),
    rp_img = $(".player-img"),
    RPhover_tl, mRP_cont, mframe;



  //// Intro-Open Anim. //
  function introOpen() {

    //   var introTween = new TweenMax({x: 100, paused:true} );
    TweenMax.set(RP_cont, {
      transformPerspective: 1750
    })

    TweenMax.from(RP_cont, 0.45, {
      scaleX: 0,
      autoAlpha: 0.5,
      ease: Power3.easeInOut
    })
    TweenMax.from(RP_cont, 0.6, {
      scaleY: 0.01,
      delay: 0.0,
      ease: Power3.easeInOut
    })
    TweenMax.from(RP_cont, 1.33, {
      y: -500,
      rotationX: 125,
      ease: Expo.easeOut,
      onCompleteParams: [".reel-player-cont, .rp-img-cont"],
      onComplete: endFix
    })
    TweenMax.from(".rp-img-cont", 1.1, {
      scale: 1,
      autoAlpha: 0.00,
      delay: 0.2,
      ease: Power2.easeInOut,
      force3D: false
    })
    TweenMax.fromTo(".amb-heavy-shadow", 1.1, {
      boxShadow: "0em 0em 0em 0em rgba(0,2,6,0.05), 0em 0em 0em 0em rgba(0,2,6,0.05), 0em 0em 0em 0em rgba(0,2,6,0.05), 0em 0em 0em 0em rgba(0,2,6,0.05), 0em 0em 0em 0em rgba(0,2,6,0.05) ",
      force3D: true
    }, {
      delay: 0.4,
      boxShadow: "0em 14em 21em 0em rgba(0,2,6,0.05), 0em 40em 15em -23em rgba(0,2,6,0.08), 0em 55em 30em -23em rgba(0,2,6,0.12), 0em 60em 55em -23em rgba(0,2,6,0.10), 0em 50em 120em -23em rgba(0,2,6,0.24)",
      ease: Power3.easeOut,
      force3D: true
    })

  };
  introOpen();

  function endFix(x) {
    TweenMax.set(x, {
      clearProps: "all"
    });
    /*  x.each(function(index, param) {
      $('body').append("<p style='pointer-events: none; position: relative; top: -500em; font-size: 24%; font-family: monospace;'>"
                 + "no. " + index  + " " + $(this).prop("tagName") + " " + $(this).prop("className") + " Props Cleared</p>"); //Logs Tag name of cleared tweens selector (aka param:) 
     // $("#msg").html($(x).attr("id")+" onComplete fired");
       //console.log(o); 
       }); */
  };

  RP_cont.hover(function() {
    // if (mRP_cont != $(this)) {
    //     console.log("change");
    //     mRP_cont = $(this);
    //     mframe = $(this).find("iframe");
    //     rp_h1 = $(this).find(".player-bar-top h1"),
    //     rp_h2 = $(this).find(".player-bar-top h2"),
    //     h1_h2 = $(this).find(".player-bar-top h1, .player-bar-top h2"),
    //     rp_BTM = $(this).find(".player-bar-btm"),
    //     Vol_cont = $(this).find(".volume-slide-cont"),
    //     vol_prog = $(this).find(".volume-slide-cont .progress"),
    //     vol_handle = $(this).find(".volume-slide-cont .handle"),
    //     center_button = $(this).find(".center-button"),
    //     btm_right = $(this).find(".btm-right-cont"),
    //     Play_SVG = $(this).find("#Play-SVG-Circle"),
    //     i_fullscreen = $(this).find(".i-fullscreen"),
    //     video_BG = $(this).find(".video-BG"),
    //     rp_img = $(this).find(".player-img");
    //     // playback();
    // }

    $(this).toggleClass('active');
    $(this).find(".player-img").toggleClass('active');


    // RPhover_tl = new TimelineMax({
    //  paused: true
    // });
    // playback();

    // if ($(this).hasClass('active')) {
    //   RPhover_tl.play().timeScale(1.0);
    // } else {
    //   RPhover_tl.reverse().timeScale(2.5);
    // }

  });



});