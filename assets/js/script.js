//Mover abeja y cerdito

let botonMover = document.getElementById("mover");

botonMover.addEventListener("click", function(event){

    document.getElementById('bee').play();

    event.preventDefault();
    $("#abeja").animate({
        top: "220px",
        right: "180px"
    }, 3000);

    $("#pig").animate({
        top: "150px",
        right: "100px"
    }, 3000);

    $("#pig").addClass("girar");
});

//Detonar audio

$("#botonHablar").click(function(){

    document.getElementById('steve').play();

    $("#comicSteve").fadeIn(3000);
    $("#comicOveja").fadeIn(3000);
    $("#contenedor").removeClass("margen1");
    $("#contenedor").css({"margin-top": "150px"});
})

//Desaparecer baby yoda

$("#desaparecer").click(function(){

    document.getElementById('magia').play();

    $("#yoda").fadeToggle(3000);
})

//Explosión con librería de Jquery UI

$("#explotar").click(function(){

    document.getElementById('explosion').play();

    $("#pandas").effect("explode", { pieces: 40 }, 400);
    $("#corazon").css({"display": "none"})
})