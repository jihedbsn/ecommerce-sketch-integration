$(document).on("click", ".search", function () {
  $(".search-bar").addClass("search-bar-active");
});
$(document).on("click", ".search-cancel", function () {
  $(".search-bar").removeClass("search-bar-active");
});


/*login - sign -up      */
$(document).on("click", ".account", function () {
    $(".form").addClass("login-active");
});

$(document).on("click", ".sign-up-btn", function () {
    $(".form").addClass("sign-up-active").removeClass("login-active");
});

$(document).on("click", ".form-cancel", function () {
    $(".form").removeClass("sign-up-active").removeClass("login-active");
});

$(document).on("click", ".have-account", function () {
    $(".form").addClass("login-active").removeClass("sign-up-active");
});

/* home landing slider */
$(document).ready(function() {
  $('#adaptive').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:true,
      auto:true
  });
});

/* featured categories slider */
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});