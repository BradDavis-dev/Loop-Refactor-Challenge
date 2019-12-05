var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRandColor() {
    return Math.floor(Math.random() * 256 );
}

for (let i = 0; i < 10; i++) {
    red = getRandColor();
    green = getRandColor();
    blue = getRandColor();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);