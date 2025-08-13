document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const dateStr = card.getAttribute("data-date");
    const dateElem = card.querySelector(".date");
    if (!dateStr || !dateElem) return;

    const postDate = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      dateElem.textContent = "Made today";
    } else {
      dateElem.textContent = `Made ${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }
  });
});
