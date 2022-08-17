// Get all divs with class key
const pianoKeys = document.querySelectorAll(".key")

function playSound(note) {

	note = (note < 9) ? ("0" + (note + 1)) : (note + 1)
	new Audio("audio/key" + note + ".mp3").play()
	console.log("Audio Played: " + note)

}

pianoKeys.forEach((pianoKey, note) => {
	
	pianoKey.addEventListener("click",() => playSound(note))
})

