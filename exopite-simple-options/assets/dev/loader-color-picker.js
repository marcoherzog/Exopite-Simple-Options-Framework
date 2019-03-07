;(function( $ ) {
    "use strict";

    $( document ).ready(function() {

        $( '.colorpicker' ).wpColorPicker({
            /**
             * @param {Event} event - standard jQuery event, produced by whichever
             * control was changed.
             * @param {Object} ui - standard jQuery UI object, with a color member
             * containing a Color.js object.
             */
            change: function (event, ui) {
                var color = ui.color.toString();
                if ($(this).hasClass('font-color-js')) {
                    $(this).parents('.wp-picker-container').next().css({'color': color});
                }
            },
        });

    });

}(jQuery));
