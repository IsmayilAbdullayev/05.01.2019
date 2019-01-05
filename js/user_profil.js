$(document).ready(function () {
    $(".date_list_end").click(show_more_function);

});


function show_more_function() {
    $(".show_more_list").slideToggle();
    var test = $(this).attr("toggle");
    if (test == "true") { test = false }
    else { test = true }
    $(this).attr("toggle", test);

    if (test) {
        var date_list = $(".date_list_end").clone();
        date_list.text("Hide ");
        date_list.append($(".date_list_end").find($('.date_list_end i').attr('class', 'fa fa-chevron-up')));
        date_list.click(show_more_function);
        $(this).replaceWith(date_list);

    } else {
        var date_list = $(".date_list_end").clone();
        date_list.text("Show more ");
        date_list.append($(".date_list_end").find($('.date_list_end i').attr('class', 'fa fa-chevron-down')));

        date_list.click(show_more_function);
        $(this).replaceWith(date_list);

    }
}