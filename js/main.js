$(function(){



function cleanSelect (select) {

    return $(select).removeClass('icon-ua').removeClass('icon-eng')

    }

    function formSelect() {

    var select = cleanSelect('.select-events');

    select.addClass(select.val() == '1' ? 'icon-ua' : 'icon-eng');

    select.css({ height: 'auto', overflow: 'hidden', zIndex: '40000' });

    select.on('mouseleave', function () {

    this.size = 1;

    cleanSelect(this).addClass($(this).val() == '1' ? 'icon-ua' : 'icon-eng');


    });

    select.on('mouseover', function () {

    cleanSelect(this);

    this.size = $(this).find('option').length;

    });

    }

    $(function () {

    formSelect();

    });

});
