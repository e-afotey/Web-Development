document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const name = document.querySelector('p');
  
  input.addEventListener('keyup', () => {
    name.textContent = input.value ? `Hello, ${input.value}` : 'Hello, Whoever you are';
  });
});