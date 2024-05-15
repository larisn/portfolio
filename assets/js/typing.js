function typing(text) {
  const textTyping = text.innerHTML.split("");
  textTyping.forEach(function(letter, i) {
    setTimeout(function() {
      text.innerHTML += letter;
    }, 65 * i);
  });
  text.innerHTML = " ";
}

typing(document.querySelector(".typing"));