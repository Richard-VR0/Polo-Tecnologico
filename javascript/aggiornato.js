var indice = 1;
mostra(indice);

function update(n) {
    mostra(indice += n);
}

function mostra(n) {
    var i;
    var foto = document.getElementsByClassName("foto");
    
    if (n > foto.length) {
        indice = 1
    }
    
    if (n < 1) {
        indice = foto.length;
    }

    for (i = 0; i < foto.length; i++) {
        foto[i].style.display = "none";
    }

    foto[indice-1].style.display = "block";
}

var indice = 0;
scorrimento();

function scorrimento() {
    var i;

    var foto = document.getElementsByClassName("foto");

    for (i = 0; i < foto.length; i++) {
        foto[i].style.display = "none";
    }

    indice++;

    if (indice > foto.length) {
        indice = 1
    }

    foto[indice-1].style.display = "block";

    setTimeout(scorrimento, 5000);
}