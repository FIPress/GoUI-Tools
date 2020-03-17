$(document).ready(function () {
    let log = function(level, msg) {
        $("#log").append('<div class="'+ level + '">' + msg + '</div>');
    };

    goui.service("log/:level/:msg",log);

    $("#create").click(function () {
        let dir = $("#location").val();
        if(dir == "") {
            alert("Please choose a directory to create your GoUI project.")
            return
        }
        goui.request({uri:"create/"+dir});
    });
});