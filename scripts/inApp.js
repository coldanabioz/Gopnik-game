const PLAYER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const GOPNIK_ATTACK_VALUE = 12;

let chosenMaxLife = 100;
let currentGopnikHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealGopnikDamage(PLAYER_ATTACK_VALUE);
  currentGopnikHealth -= damage;
  const playerDamage = dealPlayerDamage(GOPNIK_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentGopnikHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won nerd! I can\'t believe it...');
  } else if (currentPlayerHealth <= 0 && currentGopnikHealth > 0) {
    alert('Aaaaas expected - you died nerd. Good luck next time...if you are not afraid...and if you will be resurrected!');
  } else if (currentGopnikHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You found your idiot twin brother - IT\'S A DRAW!');
  }
}

function strongAttackHandler() {
  const damage = dealGopnikDamage(STRONG_ATTACK_VALUE);
  currentGopnikHealth -= damage;
  const playerDamage = dealPlayerDamage(GOPNIK_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentGopnikHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won nerd! I can\'t believe it...');
  } else if (currentPlayerHealth <= 0 && currentGopnikHealth > 0) {
    alert('Aaaaas expected - you died nerd. Good luck next time...if you are not afraid...and if you will be resurrected!');
  } else if (currentGopnikHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You found your idiot twin brother - IT\'S A DRAW!');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);