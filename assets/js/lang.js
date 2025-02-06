let currentLang = localStorage.getItem("lang") || "pt";

function loadTranslations(lang) {
  fetch(`assets/locales/${lang}.json`)
  .then(response => response.json())
  .then(data => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const section = el.getAttribute("data-section");  
      const key = el.getAttribute("data-i18n");
      
      if (data[section] && data[section][key]) {
        el.textContent = data[section][key];
      }
    });

    document.querySelectorAll('input[data-placeholder]').forEach(input => {
      const name = input.name;
      if (data.contact && data.contact[name]) {  
        input.placeholder = data.contact[name];
      }
    });

    const submitButton = document.querySelector('.button-submit');
    if (data.contact && data.contact['submit']) {
      submitButton.value = data.contact['submit'];
    }

    const titleHome = document.getElementById("title-home");
    const titleContact = document.getElementById("title-contact");
    const descHome = document.getElementById("typing-desc");
    if (lang === "en") {
      titleHome.style.maxWidth = "880px";
    } else if (lang === "es") {
      titleHome.style.maxWidth = "790px";
      titleContact.style.maxWidth = "400px";
      descHome.style.maxWidth = "600px";
    } else if (lang === "es") {
    } else {
      titleHome.style.maxWidth = "890px"; 
    }

    localStorage.setItem("lang", lang);
  })
  .catch(error => console.error("Erro ao carregar idioma:", error));
}

function changeLanguage(lang) {
  currentLang = lang;
  loadTranslations(lang);
}

loadTranslations(currentLang);
