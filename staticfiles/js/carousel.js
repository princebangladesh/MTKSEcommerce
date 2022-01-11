$(document).ready(function() {  
      $("#myCarousel").on("swiped-left",function() {  
         $("#myCarousel").carousel('prev');  
       });  
      $("#myCarousel").on("swiped-right",function() {  
         $("#myCarousel").carousel('next');  
      });  
   });  