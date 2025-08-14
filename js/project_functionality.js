
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

function checkSource(modal, source, type, modalBody){
  if (source) {
    let element;

    const guessedType = type || (() => {
      if (/\.(jpg|jpeg|png|gif|webp)$/i.test(source)) return "image";
      if (/\.(mp4|webm|ogg)$/i.test(source)) return "video";
      if (source.includes("itch.io")) return "itchio";
      if (/\.html$/i.test(source)) return "game";
      return "iframe";
    })();

    switch (guessedType) {
      case "image":
        element = document.createElement("img");
        element.src = source;
        element.style.maxWidth = "100%";
        element.style.height = "auto";
        break;

      case "video":
        element = document.createElement("video");
        element.src = source;
        element.controls = true;
        element.style.maxWidth = "100%";
        break;

      case "game":
        element = document.createElement("iframe");
        element.src = source;
        element.width = "100%";
        element.height = "600";
        element.style.border = "none";
        element.setAttribute("allowfullscreen", "");
        element.setAttribute("allow", "autoplay; fullscreen; gamepad;");
        break;

      case "itchio":
        element = document.createElement("iframe");
        // Use itch.io's official embed URL, not the main game page
        // Example: "https://itch.io/embed/123456?bg_color=000000"
        element.src = source;
        element.width = "100%";
        element.height = "600";
        element.style.border = "0";
        element.setAttribute("allowfullscreen", "");
        element.setAttribute("allow", "autoplay; fullscreen; gamepad;");
        break;

      case "iframe":
      default:
        element = document.createElement("iframe");
        element.src = source;
        element.width = "100%";
        element.height = "315";
        element.style.border = "none";
        element.setAttribute("frameborder", "0");
        element.setAttribute("allowfullscreen", "");
        break;
    }

    modalBody.appendChild(element);
  }

  modal.style.display = "flex";
}
