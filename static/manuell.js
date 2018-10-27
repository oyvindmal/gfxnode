$(document).ready(function () {
  
})

$("#runManual").click(function () {
    var data = {};
    
        data.Name = $("#manName").val();
        data.Title =  $("#manTitle").val();
        socket.emit('cmdSuper', data);
    //console.log(data);
})

$("#manDelRun").click(function () 
{   var id = $("#repSpeakerId").val();
    console.log(id);
    $.getJSON("/api/representatives/" + id, function( data ) {
        var obj = {};
        obj.Name = data.name;
        obj.Number = data.number;
        obj.Title = data.group;
        socket.emit('cmdSuper', obj);
        //console.log(data);
    })
})