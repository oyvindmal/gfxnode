var socket = io.connect('http://localhost:8080);
$(document).ready(function() 
    {
        getTaleliste();
        setInterval(getTaleliste, 5000);
    }
)

var getTaleliste = function () 
{
    $.getJSON("/api/taleliste", function( data ) {
        var container = $("#liste");
        var list = $('<table />');
        list.addClass('table');
        $.each( data, function( key, val ) {
                /*console.log(val);
                var el = $("<li />");
                el.text(val.number + " - " + val.name + " - " + val.group)*/

                var el = $('<tr />');
                    var no = $('<th>');
                    no.text(key+1);
                    no.appendTo(el);

                    var delno = $('<td />')
                    delno.text(val.number);
                    delno.appendTo(el);

                    var navn = $('<td />')
                    navn.text(val.name);
                    navn.appendTo(el);

                    var group = $('<td />')
                    group.text(val.group);
                    group.appendTo(el);

                    var action = $('<td />')
                        var btn = $("<button />");
                        btn.addClass('btn btn-success')
                        btn.text('Kjør super');
                        btn.click(function () {
                            console.log("kjør super for " + val.number + " - " + val.name + " - " + val.group);
                            var data = {};
                            
                                data.Name = val.name;
                                data.Number = val.number;
                                data.Title = val.group;
                                socket.emit('cmdSuper', data);
                        })
                        btn.appendTo(action);
                    action.appendTo(el);
                el.appendTo(list);
          });

        container.html(list);
      });
}




/*$("#btnSuper").click(function () {
    console.log("running super");
    var data = {};

    data.Name = $("#superName").val();
    data.Number = $("#superNumber").val();
    data.Title = $("#superTitle").val();
    socket.emit('cmdSuper', data);
})*/