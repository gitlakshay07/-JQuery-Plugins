//                                              ACCORDIAN
// $(document).ready(function(){
//     $('.accordian').click(function(){
//       $(".a-child").removeClass('.a-child')
//       $('.a-child').slideToggle('fast')
//     })
// })
$(document).ready(function(){

    $('.accordian-item').click(function(){

        $('.a-child').slideUp('fast');

        if ($(this).next().is(':visible')) {
            $(this).next().slideUp('fast');
        } else {
            $(this).next().slideDown('fast');
        }
    })
})
//                                              ACCORDIAN
$(document).ready(function() {
    $('.toolhover').hover(function() {
        
    const tooltip = $(this).siblings('.toolshow');

    if (tooltip.is(':visible')) {
        tooltip.fadeOut(200);
    } else {
        tooltip.fadeIn(200);
    }
});
});