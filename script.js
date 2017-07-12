//Pill Toggle for Benefits Section
$('#customerBenefits').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#restaurantBenefits').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

//Resize Individual parts
$(document).ready(function(){
    $('.section').height($(window).height()-$("#myNavbar").outerHeight());
    $('.section').css("margin-top",$("#myNavbar").outerHeight());
});
