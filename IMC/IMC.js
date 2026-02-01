let form = document.getElementById("f");
let p = document.getElementById("p");
let h = document.getElementById("h");
let r = document.getElementById("r");
let e = document.getElementById("e");

form.addEventListener("submit", x => {
  x.preventDefault();

  let a = +p.value;
  let b = +h.value;
  if (!a || !b) return;

  const c = (a / (b * b)).toFixed(2);
  let t = "", k = "";

  if (c < 18.5) { t = "Bajo peso"; k = "bajo"; }
  else if (c < 25) { t = "Normal"; k = "normal"; }
  else if (c < 30) { t = "Sobrepeso"; k = "sobre"; }
  else { t = "Obesidad"; k = "obeso"; }

  r.textContent = c;
  e.textContent = t;
  r.className = e.className = k;
});
