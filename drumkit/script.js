console.log('* TX-HYPERION ONLINE *');

function addSoundHandlers() {
	// loop through all keys and add a keyevent listener
	const keys = document.getElementsByClassName('key');
	console.log(keys);
	window.addEventListener('keydown', playSound);
}

function playSound(event) {
	// get sounds
	const angelDrum = document.getElementById('angelic-drum');

	console.log('playing', event);
	switch (event.key) {
		case 'f':
			angelDrum.play();
			break;
		default:
			console.log(`Sorry, we are out of ${expr}.`);
	}
}

addSoundHandlers();
