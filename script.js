const shapes = document.querySelectorAll(".shape");


const shapeColors = document.querySelectorAll(".palette-shapes .color");

const backgroundColors = document.querySelectorAll(".palette-background .color");



shapeColors.forEach(colorButton => {

    colorButton.addEventListener("click", () => {

        const color = colorButton.dataset.color;

        shapes.forEach(shape => {
            shape.style.backgroundColor = color;
        });

    });

});




backgroundColors.forEach(colorButton => {

    colorButton.addEventListener("click", () => {

        const color = colorButton.dataset.color;

        document.body.style.backgroundColor = color;

    });

});