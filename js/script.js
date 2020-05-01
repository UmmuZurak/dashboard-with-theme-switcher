const toggle = document.getElementById('toggle');
const theme = document.getElementById('theme');

toggle.addEventListener('input', (e) => {
  if (e.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
});

function automateSwitcher() {
  let date = new Date();
  let hours = date.getHours();

  if (hours > 17) {
    toggle.checked = true;
    darkMode();
  } else {
    lightMode();
  }
}

automateSwitcher();

function darkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  theme.innerHTML = 'Dark Mode';
}

function lightMode() {
  document.documentElement.removeAttribute('data-theme');
  theme.innerHTML = 'Light Mode';
}
