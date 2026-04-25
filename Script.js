function CalcularCalificacion() {
    const input = document.querySelector("input[type='number']");
    const calificacion = parseInt(input.value);

    if (calificacion < 0 || calificacion > 100) {
        alert("Por favor, ingresa una calificación válida entre 0 y 100.");
        return;
    }else if (calificacion >= 90) {
        alert(`A ya que ${calificacion} es mayor o igual a 90, por lo tanto, la calificación es A.`);
    } else if (calificacion >= 80) {   
        alert(`B ya que ${calificacion} está entre 80 y 89, por lo tanto, la calificación es B.`);
    } else if (calificacion >= 70) {
        alert(`C ya que ${calificacion} está entre 70 y 79, por lo tanto, la calificación es C.`);
    } else if (calificacion >= 60) {
        alert(`D ya que ${calificacion} está entre 60 y 69, por lo tanto, la calificación es D.`);
    } else {
        alert(`F ya que ${calificacion} es menor a 60, por lo tanto, la calificación es F.`);
    }
}

function crearBurbuja() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Posición horizontal aleatoria
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Duración aleatoria
    bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";

    document.getElementById("bubbles").appendChild(bubble);

    // Eliminar burbuja después de animación
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(crearBurbuja, 200);