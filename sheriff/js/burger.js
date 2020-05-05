$(document).ready(function() {
    $('.items_column_burger').click(function(event) {
        $('.items_1').toggleClass('items_active1');
        $('.items_2').toggleClass('items_acrive2');
        $('.items_3').toggleClass('items_active3');
        $('.header_menu').toggleClass('header_menu_active');
    });
});