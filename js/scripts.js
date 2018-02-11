function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skips if it is not a transform

    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //stops function from running

    audio.currentTime = 0; //revind to the start

    audio.play();

    key.classList.add('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);