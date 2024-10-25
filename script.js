var color = document.querySelector('#color');
var eraser = document.querySelector('#eraser');
var tru = document.querySelector('#tru');
var size = document.querySelector('#size');
var cong = document.querySelector('#cong');
var save = document.querySelector('#save');
var clear = document.querySelector('#clear');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var post1 = {
    x: 0,
    y: 0
}
var post2 = {
    x: 0,
    y: 0
}
var isDrawning = false;
var colorPaint = '#000000';
var sizePaint = 1;
document.addEventListener('mousedown', function(e) {
    post1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawning = true;
})
document.addEventListener('mousemove', function(e) {
    if (isDrawning) {
        post2 = {
            x: e.offsetX,
            y: e.offsetY
        }
        ctx.beginPath();
        ctx.arc(post1.x, post1.y, sizePaint, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(post1.x, post1.y);
        ctx.lineTo(post2.x, post2.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth = sizePaint * 2;
        ctx.stroke();

        post1.x = post2.x;
        post1.y = post2.y;
    }
});
document.addEventListener('mouseup', function(e) {
    isDrawning = false;
})
color.addEventListener('change', function(e) {
    colorPaint = e.target.value
})
tru.addEventListener('click', function(e) {
    sizePaint -= 1;
    sizePaint = sizePaint > 1 ? sizePaint : 1;
    size.innerText = sizePaint
})
cong.addEventListener('click', function(e) {
    sizePaint += 1;
    sizePaint = sizePaint < 20 ? sizePaint : 20;
    size.innerText = sizePaint
})
eraser.addEventListener('click', function(e) {
    colorPaint = '#ffffff';
})
clear.addEventListener('click', function() {
    let canvasStart = canvas.getClientRects()[0];
    ctx.clearRect(0, 0,canvasStart.width, canvasStart.height)
})
save.addEventListener('click', function() {
    var output = canvas.toDataURL();
    console.log(output);
    save.setAttribute('href', output);
})