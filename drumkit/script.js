console.log('* TX-HYPERION ONLINE *');

function addKeyListener() {
	window.addEventListener('keydown', playSoundHandler);
}

function playSoundHandler(event) {
	// get sounds
	const angelDrum = document.getElementById('angelic-drum');
	const arcadeBonus = document.getElementById('arcade-bonus');
	const levelComplete = document.getElementById('level-complete');
	const playerLose = document.getElementById('player-lose');
	const bonusAlert = document.getElementById('bonus-alert');
	const drumImpact = document.getElementById('drum-impact');
	const subBass = document.getElementById('sub-bass');
	const unlockGame = document.getElementById('unlock-game');
	console.log(event)

	switch (event.key) {
		case 'f':
			angelDrum.play();
			break;
		case 'd':
			arcadeBonus.play();
			break;
		case 's':
			levelComplete.play();
			break;
		case 'a':
			playerLose.play();
			break;
		case 'j':
			bonusAlert.play();
			break;
		case 'k':
			drumImpact.play();
			break;
		case 'l':
			subBass.play();
			break;
		case ';':
			unlockGame.play();
			break;
		default:
	}
}

addKeyListener();
