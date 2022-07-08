var rated = [];
var attID = 0;

$(".rating").click(function(e) {
    attID = e.target.id;
    rated.push(attID);
    e.preventDefault();
    $("#" + attID).addClass("selected");
    if (rated.length >=1) {
        if (rated[rated.length - 2] != attID) {
            $("#" + rated[rated.length -2]).removeClass("selected");
        }
    }
})

// $('rating').on('click', function() {
//     $('rating').removeClass('active');
//     $(this).addClass('active');
// })

$(".submit").click(function(e) {
    if (rated.length >=1) {
        $(".results").text("You selected " + attID + " out of 5");
        thank_you();
    } else {
        console.log("none");
    }
})

function thank_you() {
    $("#rating").css("display", "none");
    $("#thanks").css("display", "block");
}