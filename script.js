const WHATSAPP_NUMERO = "5511951597455";
const WHATSAPP_MENSAGEM =
  "Olá, Sophia! Vim pelo seu portfólio e gostaria de um orçamento.";

const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = link;
});

document.getElementById("ano").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
