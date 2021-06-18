
$('.tlt').hover(function(){
      $(this).textillate('start');
})
$('.tlt5').textillate({ 
      in: { effect: 'zoomInUp' ,delayScale:3 ,shuffle:true},
      out: { effect: 'zoomOutDown' ,delayScale:1,reverse: true,delay:1},
      
      loop:true,

    });