var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRandColor() {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

for (let i = 0; i < 10; i++) {
    getRandColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);