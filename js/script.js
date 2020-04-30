const toggle = document.getElementById('toggle');

toggle.addEventListener('input', (e) => {
  e.target.checked
    ? document.documentElement.setAttribute('data-theme', 'light')
    : document.documentElement.removeAttribute('data-theme');
});