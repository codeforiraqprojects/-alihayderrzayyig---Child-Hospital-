// var $h = $(document).height();

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 700 ) {
//       $('#float').addClass('sticky-top');
//        $('#float').removeClass('floating');
//        $('.float-ch').addClass('floatItem-row');
//        $('.float-ch').removeClass('floatItem-column');
//        $('.rm-pt-1-added').removeClass('pt-1-added');
//     }else{
//       $('#float').removeClass('sticky-top');
//       $('#float').addClass('floating');
//       $('.float-ch').addClass('floatItem-column');
//       $('.float-ch').removeClass('floatItem-row');
//       $('.rm-pt-1-added').addClass('pt-1-added');
//     }    
//     if($(this).scrollTop() > $h - 950) {
//        $('#float').removeClass('sticky-top');
//        $('#float').addClass('floating');
//        $('.float-ch').addClass('floatItem-column');
//        $('.float-ch').removeClass('floatItem-row');
//        $('.rm-pt-1-added').addClass('pt-1-added');
//     }
// });




// Smooth Scroll to ID with jQuery
$('a[href*="#"]').on('click', function(e) {
   e.preventDefault(); 
   $('html, body').animate(
     {
       scrollTop: $($(this).attr('href')).offset().top,
     },
     500,
     'linear'
   );
 });