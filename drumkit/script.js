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

	switch (event.key) {
		case 'f':
			angelDrum.currentTime = 0;
			angelDrum.play();
			break;
		case 'd':
			arcadeBonus.currentTime = 0;
			arcadeBonus.play();
			break;
		case 's':
			levelComplete.currentTime = 0;
			levelComplete.play();
			break;
		case 'a':
			playerLose.currentTime = 0;
			playerLose.play();
			break;
		case 'j':
			bonusAlert.currentTime = 0;
			bonusAlert.play();
			break;
		case 'k':
			drumImpact.currentTime = 0;
			drumImpact.play();
			break;
		case 'l':
			subBass.currentTime = 0;
			subBass.play();
			break;
		case ';':
			unlockGame.currentTime = 0;
			unlockGame.play();
			break;
		default:
	}
}

addKeyListener();
