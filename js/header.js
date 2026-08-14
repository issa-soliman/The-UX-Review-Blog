const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

function closeMenu() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

openBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', closeMenu);

sidebarLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});