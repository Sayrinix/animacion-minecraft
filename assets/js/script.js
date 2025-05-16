//Mover abeja

let botonMover = document.getElementById("mover");

botonMover.addEventListener("click", function(event){
    event.preventDefault();
    $("#abeja").animate({
        top: "220px",
        right: "180px"
    }, 1000);

    $("#pig").animate({
        top: "150px",
        right: "100px"
    }, 1000);

});

//Detonar audio

$("#botonHablar").click(function(){

    document.getElementById('steve').play()

    $("#comicSteve").css({"display": "block"});
    $("#comicOveja").css({"display": "block"});
    $("#contenedor").removeClass("margen1");
    $("#contenedor").css({"margin-top": "200px"});
})