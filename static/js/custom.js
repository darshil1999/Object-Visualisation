image = document.getElementById('image');
paragraph = document.getElementById('paragraph');
startbtn = document.getElementById('startbtn');
const start = function() {
    setTimeout(function() {
        image.style.display = 'none';
        startbtn.style.display = 'none';
        info.style.color = 'white';
        paragraph.style.display = 'block';
        beep();
        setTimeout(function() {
            image.style.display = 'block';
            startbtn.style.display = 'inline-block';
            info.style.color = 'black';
            paragraph.style.display = 'none';
            beep();
        }, 120000);
    }, 30000);
}

const beep = function() {
    var sound = document.getElementById("audio");
    sound.play();
}

const restart = function() {
    window.location.reload();
}