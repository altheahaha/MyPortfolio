function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function contactScroll() {
  var contact = document.getElementById('contact');
  contact.scrollIntoView({behaviour: 'smooth'});
}

function openPDF() {
  var pdfPath =
    "assets/html-css-js-portfolio-tutorial-2-main/assets/brandrollout.pdf";
  window.open(pdfPath, "_blank");
}

function openIMG() {
  var imgPath =
    "assets/html-css-js-portfolio-tutorial-2-main/assets/typography 2.jpg";
  window.open(imgPath, "_blank");
}

function openSecondPDF() {
  var pdfPath =
    "assets/html-css-js-portfolio-tutorial-2-main/assets/type-two.pdf";
  window.open(pdfPath, "_blank");
}

function openResumePDF() {
  var pdfPath =
    "assets/html-css-js-portfolio-tutorial-2-main/assets/resume.pdf";
  window.open(pdfPath, "_blank");
}