const target = "14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945453469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";


function endGame(seconds, score) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    if (min == 0) {
        if (sec == 1) {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent 1 second.`;
        } else {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent ${sec} seconds.`;
        }
    } else if (min == 1) {
        if (sec == 1) {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent 1 minute and 1 second.`;
        } else {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent 1 minute and ${sec} seconds.`;
        }
    } else {
        if (sec == 1) {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent ${min} minutes and 1 second.`;
        } else {
            document.getElementById('scoreText').innerText = `You counted up to ${score} digits of pi!\nYou spent ${min} minutes and ${sec} seconds.`;
        }
    }
    document.getElementById('scorePopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('scorePopup').style.display = 'none';
    location.reload(); // Reload the page to reset the game
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    let timerStarted = false;
    let seconds = 0;
    let timerInterval = null;
    const timeDisplay = document.getElementById('time');
    function updateTimer() {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        timeDisplay.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    }
    updateTimer();

    if (input) {
        score = 0;
        // Set initial value to target
        let lastValue = '';
        // Prevent copy, cut, and paste
        input.addEventListener('copy', function(e) { e.preventDefault(); });
        input.addEventListener('cut', function(e) { e.preventDefault(); });
        input.addEventListener('paste', function(e) { e.preventDefault(); });
        input.addEventListener('input', function(e) {
            // Start timer on first input
            if (!timerStarted) {
                timerStarted = true;
                timerInterval = setInterval(() => {
                    seconds++;
                    updateTimer();
                }, 1000);
            }
            // Only allow digits and newlines
            this.value = this.value.replace(/[^0-9\n]/g, '');
            // Prevent deletion: if new value is shorter, revert
            if (this.value.length < lastValue.length) {
                this.value = lastValue;
            } else {
                lastValue = this.value;
            }
            const userInput = this.value.replace(/\n/g, ''); // Remove newlines for checking
            if (target.startsWith(userInput)) {
                // Correct
                this.style.backgroundColor = 'rgba(0,255,0,0.2)';
                score ++;
                // If user finises the game
                if (userInput.length == target.length) {
                    if (timerInterval) clearInterval(timerInterval); // Stop timer on end
                    document.getElementById('scoreText').innerText = `You are a legned. You finshed the game by counting up to ${score} digits of pi.`;
                    document.getElementById('scorePopup').style.display = 'flex';
                }
                // Update score display
                document.getElementById('score').textContent = `${score}`;
            } else {
                // Incorrect input
                this.style.backgroundColor = 'rgba(255,0,0,0.2)';
                this.disabled = true; // Disable textarea on wrong input
                endGame(seconds, score);
                if (timerInterval) clearInterval(timerInterval); // Stop timer on end
            }
        });
    }
});