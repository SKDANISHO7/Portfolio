document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.querySelector('.toggle-icon');
  
    toggleIcon.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleIcon.classList.toggle('bx-sun');
    });
  });