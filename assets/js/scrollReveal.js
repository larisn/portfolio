
function scrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal(".scrollReveal100", {delay: 100});
  sr.reveal(".scrollReveal200", {delay: 200});
  sr.reveal(".scrollReveal300", {delay: 300});
  sr.reveal(".scrollReveal400", {delay: 400});
  sr.reveal(".scrollReveal500", {delay: 500});
  sr.reveal(".scrollReveal600", {delay: 600});
  sr.reveal(".IntervalDelay", {interval: 400});
}

scrollReveal();