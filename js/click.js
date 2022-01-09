function toggleLanguage(event) {
  let target = event.target;
  if (target.classList.contains('hero__lang-current')) {
    event.preventDefault();
    target = target.parentNode;
  }
  target.classList.toggle('active-lang');
}

function removeLanguage(event) {
  let target = event.target;
  if (target.classList.contains('hero__lang-current')) {
    return
  }
  document.getElementById('hero__lang_id').classList.remove('active-lang');
}

function selectLanguage(event) {
  const currentClass = 'hero__lang-current';
  const optionClass = 'hero__lang-option'
  let target = event.target;
  if (target.classList.contains(currentClass)) {
    return;
  }
  else if (target.classList.contains(optionClass)) {
    const currentLang = target.previousElementSibling.innerText;
    const optionLang = target.innerText;

    target.innerText = currentLang;
    target.previousElementSibling.innerText = optionLang;
  }
}