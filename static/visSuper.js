var socket = io.connect('https://gfxnode.herokuapp.com');

socket.on('runSuper', function (data) {

    
    //document.write(data.Name);
    console.log(data);
    $("#supername").text(data.Name);
    $("#supertitle").text(data.Title);
    //$("#supernumber").text(data.Number);
    $("#super").fadeToggle("slow", function() {
        //$("#supername").toggleClass("hidden");
        setTimeout(function () {
            $("#super").fadeToggle("slow");

        }, 10000);
    })
});
