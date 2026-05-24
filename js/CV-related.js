const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
})

function downloadCV() {
  const pdfURL = '../resume/JosephineEmenyaCVMay1.pdf';

  const link = document.createElement('a');
  link.href = pdfURL;
  link.download = 'JosephineEmenyaResume.pdf'; // Suggested filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
