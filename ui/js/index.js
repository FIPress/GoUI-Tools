document.addEventListener('DOMContentLoaded',function () {
    /*let log = function(level, msg) {
        $("#log").append('<div class="'+ level + '">' + msg + '</div>');
    };
    goui.service("log/:level/:msg",log);
    */

    let name = document.getElementById("name");
    let picker = document.getElementById("location");
    /*picker.addEventListener('pick',function (e) {
        let p = e.detail;
        if(p) {
            picker.value = p + goui.os.pathSeparator + name.value;
        }
    });*/

    let create = document.getElementById("create");
    create.addEventListener('click',function () {
        let path = picker.value;
        if(!path) {
            alert("Please choose a directory to create your GoUI project.");
            return;
        }
        goui.request({url:"create/"+name.value+"/"+encodeURIComponent(path),
            success: function () {
                alert("ok");
            }, error: function (ret) {
                alert("failed");
            }});
    });


});