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
    $(window).resize(function(){
        $(".fullHeight").height($(document).height());
    });
});
