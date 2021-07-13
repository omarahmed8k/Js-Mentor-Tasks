const text = document.querySelector('#text');
let i = 16;
function textIncrease() {
    setTimeout(function () {
        i++;
        if (i <= 116) {
            textIncrease();
            text.style.fontSize = i + 'px';
        }
    }, 1000);
    return i;
}
textIncrease();

module.exports = textIncrease;