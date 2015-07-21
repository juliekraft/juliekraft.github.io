var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ProjectsController',
      templateUrl: 'js/views/projectList.html'
    })
    .when('/:id', {
      controller: 'ProjectController',
      templateUrl: 'js/views/projectDetail.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});


// initializing Stellar
$(window).stellar();

//playing with 'h'
var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.h').animate({top: '-=10'}, 10);
    } else {
        $('.h').animate({top: '+=10'}, 10);
    }
    lastScrollTop = st;
});


$('#resume').click(function(){alert("Watch this space!  Resume is currently under maintenance.")});


//trying to animate h (for Hello animation hopefully)
// $('#h').animate({
//     width: [ "toggle", "swing" ],
//     height: [ "toggle", "swing" ],
//     opacity: "toggle"
//   }, 5000, "linear", function() {
//     $(this).after(console.log('finished animation'));
//   });

// var element = document.getElementById('h'); //replace elementId with your element's Id.
// var rect = element.getBoundingClientRect();
// var elementLeft,elementTop; //x and y
// var scrollTop = document.documentElement.scrollTop?
//                 document.documentElement.scrollTop:document.body.scrollTop;
// var scrollLeft = document.documentElement.scrollLeft?                   
//                  document.documentElement.scrollLeft:document.body.scrollLeft;
// elementTop = rect.top+scrollTop;
// elementLeft = rect.left+scrollLeft;
// console.log(elementLeft, elementTop);

// hhh.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);