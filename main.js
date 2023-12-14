const btn = document.querySelector('.color-btn');
const colorNumber = document.querySelector('.color-number');
const checkerWrapper = document.querySelector('.checker-wrapper');
const checker = document.querySelector('.checker');
let auto;
let miliseconds = 3000;

function changeBackgroundColor() {
    console.log('change color');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    colorNumber.textContent = `#${randomColor}`;
}

function checkerToggle() {
    checker.classList.toggle('active')
    if (checker.classList.contains('active')) {
        changeBackgroundColor()
        auto = true;
        console.log(miliseconds);

        const intervalId = setInterval(() => {
            if (auto === false) {
                clearInterval(intervalId)
            } else if (auto === true) {
                changeBackgroundColor();
            }
        }, miliseconds)
    } else if (!checker.classList.contains('active')) {
        auto = false;
    }
}

btn.addEventListener('click', changeBackgroundColor);

changeBackgroundColor();

checkerWrapper.addEventListener('click', checkerToggle);

// set time interval logic