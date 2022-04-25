const adviceId = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');
const adviceBtn = document.querySelector('.advice__dice');

async function generateAdvice() {
    adviceBtn.disabled = true;
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`
    setInterval(() => {
        adviceBtn.disabled = false;
    }, 2000)
}

window.onload = generateAdvice();
adviceBtn.addEventListener('click' , generateAdvice);