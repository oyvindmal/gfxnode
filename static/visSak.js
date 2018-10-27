$(document).ready(function () {
    $.getJSON("/api/sak", function( data ) {
        console.log(data);
        if(data.data !== null)
            {
                var ai = data.data.activeItem;
                $("#sakstittel").text(ai.number + " - " + ai.title);
            }
    })
})