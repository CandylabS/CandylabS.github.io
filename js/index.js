var pages = $('.pages').children();

pages.each(function(i) {
  var page = $(this);
  if (i % 2 === 0) {
    page.css('z-index', (pages.length - i)); 
  }
});

$(window).load(function() {
  
  $('.page').click(function() {
    var page = $(this);
    var page_num = pages.index(page) + 1;
    if (page_num % 2 === 0) {
      page.removeClass('flipped');
      page.prev().removeClass('flipped');
    } else {
      page.addClass('flipped');
      page.next().addClass('flipped');
    }
  });

  // $('#tumblr i').mousedown();

  // $('h1').click(function() {
  //   var page = $(this).parent('.page');
  //   var page_num = pages.index(page) + 1;
  //   if (page_num % 2 === 0) {
  //     page.removeClass('flipped');
  //     page.prev().removeClass('flipped');
  //   } else {
  //     page.addClass('flipped');
  //     page.next().addClass('flipped');
  //   }
  // });
  
  $('.book').addClass('bound');
});