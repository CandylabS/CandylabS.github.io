$('.video').magnificPopup({
  type: 'iframe',  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>'
  }
});

$('.gallery').magnificPopup({ 
  
  type: 'image',
  delegate: 'div',
  removalDelay: 300,
  mainClass: 'mfp-with-fade',
  
  gallery:{enabled:true}
  
});