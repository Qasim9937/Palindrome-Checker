const form = document.querySelector('form');
const input = document.getElementById('text-input');
const result = document.getElementById('result');
const resultDiv = document.getElementById('result-div');


function checkPalindrone(event) {
  event.preventDefault();
  const originalInput = input.value.trim(); // Preserve the original input
  const wordInput = originalInput.replace(/[^a-zA-Z0-9]/g, ''); // Cleaned version for checking
  
  if (originalInput === '') {
    alert('Please input a value');
  } else if (wordInput.toLowerCase() === wordInput.split('').reverse().join('').toLowerCase()) {
    result.innerText = `${originalInput} is a palindrome`;
    resultDiv.style.color = 'rgb(0,255,0)';
    resultDiv.style.display = 'flex';
    resultDiv.style.justifyContent = 'center';
    resultDiv.style.alignItems = 'center';
  } else {
    result.innerText = `${originalInput} is not a palindrome`;
    resultDiv.style.color = 'red';
    resultDiv.style.display = 'flex';
    resultDiv.style.justifyContent = 'center';
    resultDiv.style.alignItems = 'center';
  }
}

form.addEventListener('submit', checkPalindrone)