


function downloadCV() {
  const pdfURL = '../resume/cv.pdf';

  const link = document.createElement('a');
  link.href = pdfURL;
  link.download = 'JosephineEmenyaResume.pdf'; // Suggested filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
