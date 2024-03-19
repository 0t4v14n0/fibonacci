function inserirTexto(texto) {
    var footer = document.getElementById("footer");
    footer.innerHTML += "<p>" + texto + "</p>";
}

function testeVariavel(){
    var repeti = document.getElementById('texto').value;

    var n1 = 1, n2 =1, nxn;

    for (var i = 0; i < repeti-1; i++) {
        inserirTexto(n1);
        nxn = n1+n2;       
        n1 = n2;
        n2 = nxn;
    }
}