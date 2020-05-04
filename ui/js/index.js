document.addEventListener('DOMContentLoaded',function () {
    /*let log = function(level, msg) {
        $("#log").append('<div class="'+ level + '">' + msg + '</div>');
    };
    goui.service("log/:level/:msg",log);
    */

    let getTemplate = function(id) {
        return document.getElementById(id).cloneNode(true).content.firstElementChild;
    };

    let box = document.getElementById("box");
    let creating;
    let getCreating = function () {
        if(creating!=null) {
            return creating;
        }
        creating = getTemplate("creating");
        let name = creating.getElementsByTagName("input")[0];
        let picker = creating.getElementsByTagName("g-filepicker")[0];

        let create = creating.getElementsByTagName("button")[0];
        create.addEventListener('click',function () {
            let path = picker.value;
            if(!path) {
                alert("Please choose a directory to create your GoUI project.");
                return;
            }
            goui.request({url:"create/"+name.value+"/"+encodeURIComponent(path),
                success: function () {
                    showPackaging();
                }, error: function (ret) {
                    alert("failed");
                }});
        });

        return creating;
    };

    let opening;
    let getOpening = function () {
        if(opening!=null) {
            return opening;
        }
        opening = getTemplate("opening");
        //let name = creating.getElementsByTagName("input")[0];
        let picker = creating.getElementsByTagName("g-filepicker")[0];

        let open = creating.getElementsByTagName("button")[0];
        open.addEventListener('click',function () {
            let path = picker.value;
            if(!path) {
                alert("Please choose a directory to create your GoUI project.");
                return;
            }
            goui.request({url:"check/"+encodeURIComponent(path),
                success: function () {
                    showPackaging();
                }, error: function (ret) {
                    alert("failed");
                }});
        });

        return creating;
    };



    let packaging;
    let showPackaging = function() {
        if(packaging != null) {
            box.appendChild(packaging);
            return;
        }
        packaging = getTemplate("packaging");

        box.appendChild(packaging);
    };

    document.getElementById("new").addEventListener('click',function () {
        box.innerHTML = "";
        box.appendChild(getCreating());
    });

    document.getElementById("open").addEventListener('click',function () {
        box.innerHTML = "";
        box.appendChild(getOpening());
    });

});