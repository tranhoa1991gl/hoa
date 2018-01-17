
jQuery(function() {
  if(jQuery('#rev_slider').length > 0)
    jQuery('#rev_slider').show().revolution({
    dottedOverlay: 'none',
      delay: 8000,
      startwidth: 776,
      startheight: 510,
      
      navigationType:"both",                  
      navigationArrows:"",        
      navigationStyle: 'preview4',             
      touchenabled:"on",                      
      onHoverStop:"on",        

      navOffsetHorizontal:0,
      navOffsetVertical:20,

      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,

      spinner: 'spinner2',
      keyboardNavigation: 'on',

      navigationHAlign: 'center',
      navigationVAlign: 'bottom',
      navigationHOffset: 20,
      navigationVOffset: 20,

      soloArrowLeftHalign: '',
      soloArrowLeftValign: '',
      soloArrowLeftHOffset: 0,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: '',
      soloArrowRightValign: '',
      soloArrowRightHOffset: 0,
      soloArrowRightVOffset: 0,

      shadow: 0,
      fullWidth: 'on',
      fullScreen: 'off', 

      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,

      shuffle: 'off',
      autoHeight: 'off',
      forceFullWidth: 'off',
      hideTimerBar: 'on',

      hideNavDelayOnMobile: 1500,
      hideThumbsOnMobile: 'off',
      hideBulletsOnMobile: 'off',
      hideArrowsOnMobile: 'off',
      hideThumbsUnderResolution: 0,

      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      startWithSlide: 0

    });
  /* End Home Slider */
});