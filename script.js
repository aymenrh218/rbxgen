
function nextStep(step) {
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');

  if (step === 3) {
    
    let i = 0;
    const messages = ["Analyse du pseudo...", "Vérification de la base de données...", "Connexion au serveur..."];
    const loaderText = document.createElement("div");
    loaderText.className = "loader-text";
    loaderText.id = "loaderText";
    loaderText.innerText = messages[0];
    document.getElementById("step3").appendChild(loaderText);
    const interval = setInterval(() => {
      i++;
      if (i < messages.length) {
        loaderText.innerText = messages[i];
      } else {
        clearInterval(interval);
        nextStep(4);
      }
    }, 1000);
    
  }
}

function startCountdown() {
  nextStep(5);
  let count = 3;
  const el = document.getElementById("countdown");
  const interval = setInterval(() => {
    count--;
    el.textContent = count;
    if (count <= 0) {
      clearInterval(interval);
      const username = document.getElementById("username").value;
      const amount = document.getElementById("amount").value;
      window.location.href = `verify.html?username=${encodeURIComponent(username)}&amount=${encodeURIComponent(amount)}`;
    }
  }, 1000);
}
