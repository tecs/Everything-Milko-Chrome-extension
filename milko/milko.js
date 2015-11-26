(function ($) {
    //Run on jQuery ready
    $(document).ready(function () {
        $('img').each(function(){
            var $i = $(this);
            $i.css('width', $i.width());
            $i.css('height', $i.height());
            $i.attr('src', 'http://i.imgur.com/pwUBqaC.jpg');
        });

    });


})(jQuery);
