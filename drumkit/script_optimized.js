function addKeyListener() {
	window.addEventListener('keydown', playSoundHandler);
	const keys = document.querySelectorAll('.key');
	keys.forEach((key) =>
		key.addEventListener('transitionend', removeTransition)
	);
}

function playSoundHandler(e) {
	// get sounds
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
	console.log(this)
}

addKeyListener();
