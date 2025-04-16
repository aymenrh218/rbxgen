

function nextStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('step' + n);
  target.classList.add('active');

  // Confetti + son pour step6
  if (n === 6) {
    setTimeout(() => {
      if (window.confetti) {
        confetti({
          particleCount: 180,
          spread: 120,
          origin: { y: 0.6 }
        });
      }
      const audio = document.getElementById("success-audio");
      if (audio) audio.play();
    }, 500);
  }

  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + n).classList.add('active');
}

function generateInputs(containerId, count) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Code ' + (i + 1);
    container.appendChild(input);
  }
}

function generateCodeInputs2() {
  const value = document.getElementById('finalAmount').value;
  if (value) generateInputs('codeInputs2', parseInt(value));
}

function generateCodeInputs3() {
  const value = document.getElementById('transferType').value;
  if (value) generateInputs('codeInputs3', parseInt(value));
}

// Initial 7 inputs in step 3
window.onload = () => {
  generateInputs('codeInputs1', 7);
};
