function G() {
    var main = document.getElementById("main");
    if (main !== null) {
        main.appendChild(document.createElement("<p>a</p>"));
        document.getElementById("main").innerHTML = main.innerHTML;
    }
}
