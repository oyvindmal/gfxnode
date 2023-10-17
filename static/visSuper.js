var socket = io.connect('http://localhost:8080');

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

        }, 5000);
    })
});
