
jQuery('document').ready(function () {

    jQuery('#button1').on('click', function () {
        alert('Вы нажали меня!');
    });
    jQuery('#button2').on('click', function () {
    var value1;
    value1 = jQuery('#input1').val();
    alert(value1);
});
    jQuery('#button3').on('click', function () {
        var val1, val2, val3, val4;
        val1=jQuery('#input2').val();
        val2=jQuery('#input3').val();
        val1=parseInt(val1);
        val2=parseInt(val2);
        val3=(val1*val1)+(val2*val2);
        val4=Math.sqrt(val3);
        jQuery('.div21').html(val4);
    });
});
