$("ul").on("click", "li", function(){
    // $(this).css({
    //     "color":"grey",
    //     "text-decoration":"line-through"
    // })
    $(this).toggleClass("done");
});

$("ul").on("click", "li span", function (e) { 
    e.preventDefault();
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input").on("keypress", function (e) {
    if(e.which === 13 && $(this).val()!==""){
        $("ul").append(`<li><span><i class= "fas fa-trash"></i></span> ${$(this).val()}</li>`);
        $(this).val("");
    };
});

$(".fa-list").on("click", function () {
    $("input").fadeToggle();
});