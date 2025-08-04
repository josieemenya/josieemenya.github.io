
let tech_used;
class ProjectCard extends HTMLElement {
  connectedCallback() {

    const title = this.getAttribute('title') || 'Default Title';
    const thumbnail = this.getAttribute('thumbnail') || 'default';
    const description = this.getAttribute('description') || 'Default description';
    const rawTech = this.getAttribute("tech-used") || "[]";
    const color = this.getAttribute('color') || '#444';

    let techUsed;
    try {
      techUsed = JSON.parse(rawTech);
    } catch {
      techUsed = [];
    }

    const listItems = techUsed.map(tech => `<li>${tech}</li>`).join("");



    this.innerHTML = `
          <style> ul, li{
            color: ${color};
           }</style>
          <div style="border: 12px solid #ccc; padding: 10px; border-radius: 12px; height: 600px;  width: 450px;  background-color: ${color};">
            <h3 style="color: white">${title}</h3>
            <img src="${thumbnail}" alt="Project Snapshot">  <button>Link To Project</button>
            <ul>${listItems}</ul>
            <p>${description}</p>
          </div>
        `;

  }
}
customElements.define('project-card', ProjectCard);



window.onload = function () {
  document.querySelector('.nav-bar').classList.add('animate');
  document.querySelector('.footer').classList.add('animate');
  document.querySelector('.content').classList.add('animate');
};


if (window.innerWidth <= 768) {
  document.getElementById('mobile-warning').style.display = 'block';
  document.querySelector('#mobile-warning').innerHTML= `
    <div style="color: hsla{0, 0, 0, .9}">
        <h1>Best Viewed on a PC device</h1>
    </div>
  `
}
