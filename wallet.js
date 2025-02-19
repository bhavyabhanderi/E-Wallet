
/*=============== Wallet Balance Toggle ===============*/

// Function to toggle the visibility of balances
function toggleBalance(type) {
    const balance = document.getElementById(`${type}Balance`);
    const eyeIcon = document.getElementById(`${type}Eye`);
  
    if (balance && eyeIcon) {
      if (balance.style.visibility === 'hidden') {
        balance.style.visibility = 'visible';
        eyeIcon.classList.remove('ri-eye-fill');
        eyeIcon.classList.add('ri-eye-line');
      } else {
        balance.style.visibility = 'hidden';
        eyeIcon.classList.remove('ri-eye-line');
        eyeIcon.classList.add('ri-eye-fill');
      }
    } else {
      console.error(`Element with ID '${type}Balance' or '${type}Eye' not found.`);
    }
  }
  