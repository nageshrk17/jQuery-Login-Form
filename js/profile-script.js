// Function for drop down from the top of the screen.

jQuery.fn.center = function() {
    this.css("position", "absolute");
    this.css("top", "-300px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}

$(document).ready(function() {
    $('#form').center().delay(300).animate({
        'top': '0'
    });
    $('#tab').center().delay(300).animate({
        'top': '400px'
    });
});

var isValid = true;

$('#submit').click(function(log) {

    isValid = true;
    
    // Validation for User Name.
    // User Name must contain a minimum of 4 characters and maximum of 15 characters.
    // User Name contains only letters (a-z).
    // User Name will not accept Special Characters & Numbers.

    $('#user').each(function() {
        var inputVal = $(this).val();
        var userReg = /^[a-zA-Z]{4,15}$/;
        if (!userReg.test(inputVal)) {
            alert("Enter the Valid User Name");
            isValid = false;
            $(this).css({
                "border-color": "red",
                "background": "White"
            });
        } else {
            $(this).css({
                "border-color": "blue",
                "background": "#C0C0C0"
            });
        }
    });

    // Validation for Phone Number.
    // The phone number should me exactly 10 digits.

    $('#number').each(function() {
        var inputVal = $(this).val();
        var numberReg = /^\d{10}$/;
        if (!numberReg.test(inputVal)) {
            alert("Enter the Valid Phone Number");
            isValid = false;
            $(this).css({
                "border-color": "red",
                "background": "White"
            });
        } else {
            $(this).css({
                "border-color": "blue",
                "background": "#C0C0C0"
            });
        }
    });

    // Validation for E-mail Address.

    $('#mail').each(function() {
        var inputVal = $(this).val();
        var mailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!mailReg.test(inputVal)) {
            alert("Enter the Valid E-mail");
            isValid = false;
            $(this).css({
                "border-color": "red",
                "background": "White"
            });
        } else {
            $(this).css({
                "border-color": "blue",
                "background": "#C0C0C0"
            });
        }
    });

});

var index = 0;

$(document).ready(function(event) {

    var objs = [];

    $("#submit").click(function() {

        var new_row = "";

        var obj = new Object();

        // Creating objects to hold data from textboxes.

        obj.Name = $("#user").val();
        obj.Phone = $("#number").val();
        obj.Email = $("#mail").val();
        objs.push(obj);
        index++;

        if (isValid == true) {

            // To create rows dynamically in the table.

            new_row = "<tr id='row" + index + "'><td>" + obj['Name'] + "</td> <td>" + obj['Phone'] + " </td> <td>" + obj['Email'] + " </td><td><input type='button'  class='" + index + "' value='Delete'></td> </tr>";

            // To append the objects to the table

            $("#tab").append(new_row);

            // To get index in collection of the clicked item.
            $("." + index).click(function() {
                var del = $(this).attr("class");
                if (confirm("Are you sure you want to delete this row?")) {

                    // Function to delete the row

                    $("#row" + del).fadeTo("slow", 0.4 , function(){
                        $(this).remove();
                        return true;
                    });
                }
            });
        } else {
            // prevent the form from being submitted until we say so
            event.preventDefault();
        }
    });
});
