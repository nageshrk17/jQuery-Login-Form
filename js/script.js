// Login box drop down from the top of the screen.

jQuery.fn.center = function() {
    this.css("position", "absolute");
    this.css("top", "-300px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}

$(document).ready(function() {
    $('#container').center().delay(300).animate({
        'top': '0px'
    });
});

// Validation for User Name and Password

var isValid = true;

$('#button').click(function(event) {

    isValid = true;

    // User Name must contain a minimum of 4 characters and maximum of 15 characters.
    // User Name contains only letters (a-z).
    // User Name will not accept Special Characters & Numbers.

    $('#user').each(function() {
        var inputVal = $(this).val();
        var numericReg = /^[a-zA-Z]{4,15}$/;
        if (!numericReg.test(inputVal)) {
            alert("Enter the Valid Username");
            isValid = false;
            $(this).css({
                "border-color": "red",
                "background": "White"
            });
            // prevent the form from being submitted until we say so
            event.preventDefault();
        } else {
            $(this).css({
                "border-color": "blue",
                "background": "#80776a"
            });
        }
    });

    // Password must contain a minimum of 5 characters and maximum of 15 characters.
    // Password accepts only Characters & Numbers.
    // Password will not accept Special Characters.

    $('#password').each(function() {
        var inputVal = $(this).val();
        var numericReg = /^[a-zA-Z0-9_-]{5,15}$/;
        if (!numericReg.test(inputVal)) {
            alert("Enter the Valid Password");
            isValid = false;
            $(this).css({
                "border-color": "red",
                "background": "White"
            });
            event.preventDefault();
        } else {
            $(this).css({
                "border-color": "blue",
                "background": "#80776a"
            });
        }
    });
});

//login box will fly off the top of the screen.

$('#button').click(function() {

    if (isValid == true) {
        $('#container').click(function(event) {
            var form = $(this);
            event.preventDefault();
            form.slideUp(3000, function() {
                window.location = "profile/profile.html";
            });
        });
    }
});
