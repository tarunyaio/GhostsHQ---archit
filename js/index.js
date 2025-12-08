document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('#menu');
  const dropdown = document.querySelector('.menu-dropdown');

  if (!menu || !dropdown) {
    console.error('Menu elements not found');
    return;
  }

  let hideTimer = 0;

  function showMenu() {
    clearTimeout(hideTimer);
    dropdown.style.display = 'flex';
    dropdown.style.opacity = '1';
  }

  function hideMenu() {
    hideTimer = setTimeout(() => {
      dropdown.style.opacity = '0';

      setTimeout(() => {
        dropdown.style.display = 'none';
      }, 200);
    }, 180);
  }

  menu.addEventListener('mouseenter', showMenu);
  menu.addEventListener('mouseleave', hideMenu);

  dropdown.addEventListener('mouseenter', showMenu);
  dropdown.addEventListener('mouseleave', hideMenu);
});
