window.onbeforeunload = function () {
    return false;
};

document.getElementById("ipt").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        // Prevent the default action of the Enter key
        event.preventDefault();

        // Call your function here
        add();
    }
});

function add() {
    var a = document.getElementById("ipt");

    var x = document.getElementById("txt");

    if (a.value == "") {

        var y = document.createElement("p");
        var z = document.createTextNode("Enter The Value");
        y.appendChild(z);
        x.appendChild(y);

        function setTextAndClear(text, time) {
            // Set the text
            x.innerText = text;
            x.style.backgroundColor = "lightgreen";

            // Set a timeout to clear the text after the specified time
            setTimeout(() => {
                x.innerText = '';
            }, time);
        }

        setTextAndClear('Enter The Value', 1000);


    }

    else {
        x.value = "";
        var b = document.createElement("p");
        var c = document.createTextNode(a.value);

        var e = document.createElement("button");
        var f = document.createTextNode("Update");

        var g = document.createElement("button");
        var h = document.createTextNode("Delete");
        g.appendChild(h);
        e.appendChild(f);

        b.appendChild(c);
        b.appendChild(g);
        b.appendChild(e);

        e.addEventListener("click", function update() {

            if (a.value == "") {

                var y = document.createElement("p");
                var z = document.createTextNode("Enter The Value");
                y.appendChild(z);
                x.appendChild(y);

                function setTextAndClear(text, time) {
                    // Set the text
                    x.innerText = text;
                    x.style.backgroundColor = "lightgreen";

                    // Set a timeout to clear the text after the specified time
                    setTimeout(() => {
                        x.innerText = '';
                    }, time);  9987816420
                }

                setTextAndClear('Enter The Value', 1000);

            }

            else {
                var main = document.getElementById("material");
                var abc = document.getElementById("ipt").value;
                var newtxt = document.createElement('p');
                var newcont = document.createTextNode(abc);
                c.remove();
                newtxt.appendChild(newcont);
                b.appendChild(newcont);
                document.getElementById("ipt").value = "";
            }
        });


        g.addEventListener("click", function dele() {
            b.remove();
        });


        var d = document.getElementById("res");
        a.value = "";
        d.appendChild(b);
    }
    setTimeout(function add() {
        x.value = "";
    }, 1000)
}
