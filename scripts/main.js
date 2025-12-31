// 1. Intercambio de imágenes al hacer clic
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

img1.addEventListener('click', () => {
    let temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
});

// 2. Cambiar texto con el campo de entrada
const userInput = document.getElementById('user-input');
const dynamicText = document.getElementById('dynamic-text');

userInput.addEventListener('input', () => {
    dynamicText.textContent = userInput.value || 'Escribe algo en el campo y verás cómo cambia este texto:';
});

// 3. Objeto en movimiento
const movingObject = document.getElementById('moving-object');
let position = 0;
let direction = 1;

function moveObject() {
    if(position > window.innerWidth - 50 || position < 0) {
        direction *= -1;
    }
    position += 5 * direction;
    movingObject.style.left = position + 'px';
    requestAnimationFrame(moveObject);
}

moveObject();
