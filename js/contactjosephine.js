
let tech_used;
class ContactForm extends HTMLElement {
  connectedCallback() {

    const subject = document.getElementById('subject');
    const body = document.getElementById('body');
    const button = document.getElementById("button");

    function sendEmail() {

      window.location.href = `mailto:redacted@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body.value)}`;
    }

    button.addEventListener("click", sendEmail);



  }
}
customElements.define('contact-form', ContactForm);


