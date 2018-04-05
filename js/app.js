document.addEventListener('DOMContentLoaded', function() {

    // Zadanie 1 zrobione w CSS


    //Zadanie 2

    var img1 = document.querySelector(".products-section .column:nth-of-type(1) img");
    var img2 = document.querySelector(".products-section .column:nth-of-type(2) img");
    var sticker1 = document.querySelector(".products-section .column:nth-of-type(1) .product-sticker");
    var sticker2 = document.querySelector(".products-section .column:nth-of-type(2) .product-sticker");

    img1.addEventListener("mouseover", function(event){
        sticker1.style.visibility = "hidden";
    });
    img1.addEventListener("mouseout", function(event){
        sticker1.style.visibility = "visible";
    });
    img2.addEventListener("mouseover", function(event){
        sticker2.style.visibility = "hidden";
    });
    img2.addEventListener("mouseout", function(event){
        sticker2.style.visibility = "visible";
    });


    // Zadanie 3

    var next = document.querySelector(".button-nav-right");
    var prev = document.querySelector(".button-nav-left");

    var lis = document.querySelectorAll(".slider li");
    var counter = 0;

    lis[0].classList.add("visible");

    next.addEventListener("click", function (event){
        lis[counter].classList.remove("visible");
        counter++;
        if (counter >= lis.length) {
            counter = 0;
        }
        lis[counter].classList.add("visible");
    });

    prev.addEventListener("click", function (event){
        lis[counter].classList.remove("visible");
        counter--;
        if (Math.sign(counter) === -1) {
            counter = lis.length-1;
        }

        lis[counter].classList.add("visible");
    });

});