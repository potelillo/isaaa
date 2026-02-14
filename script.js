/* ==========================================================
   LOGIN (SHA-256) + UI
========================================================== */

// HASH actual corresponde a "password"
const PASSWORD_SHA256 =
  "05b38a2d540f801e9acf9c41f18cf2b32e299b3e8f22dd1017753f57d12b2bc1";

const SESSION_KEY = "bizcochito";

// ✅ Tu array EXACTO
const mangaPages = [
  { file: "1.Isa_bar_dia2.png", desc: "Día 2: Isa en el Bar" },
  { file: "2.Isa_restaurante_dia3.png", desc: "Día 3: Restaurante" },
  { file: "3.Isa_david_sofa_dia4.png", desc: "Día 4: Relax en el Sofá" },
  { file: "4.Isa_david_coche_dia5.png", desc: "Día 5: Viaje en Coche" },
  { file: "5.isa_david_alhambra_dia6.png", desc: "Día 6: La Alhambra" },
  { file: "6.Isa_david_rockandRollas_dia7.png", desc: "Día 7: Rock & Rollas" },
  { file: "7.isa_david_mirador_granada_dia8.png", desc: "Día 8: Mirador de Granada" },
  { file: "8.isa_david_pildoras_fatidicas_dia9.png", desc: "Día 9: Píldoras Fatídicas" },
  { file: "9.isa_david_lisboa_dia10.png", desc: "Día 10: Lisboa" },
  { file: "10.isa_david_mondo_discoteca_dia11.png", desc: "Día 11: Mondo Discoteca" },
  { file: "11.foto_cachopo_restaurante_dia12.png", desc: "Día 12: El Gran Cachopo" },
  { file: "12.foto_fiesta_hotbeat_dia13.png", desc: "Día 13: Fiesta Hotbeat" },
  { file: "13.indi_isa_parque_dia14.png", desc: "Día 14: Indi e Isa en el Parque" },
  { file: "14.isa_clase_dia15.png", desc: "Día 15: Isa en Clase" },
  { file: "15.isa_david_navidades_torrejon_dia16.png", desc: "Día 16: Navidades en Torrejón I" },
  { file: "16.isa_david_navidades_torrejon_dia17.png", desc: "Día 17: Navidades en Torrejón II" },
  { file: "17.isa_cena_navidad_ramen_dia18.png", desc: "Día 18: Ramen Navideño" },
  { file: "18_isa_david_murcia_catedral_dia19.png", desc: "Día 19: Catedral de Murcia" },
  { file: "19_isa_david_murcia_dia20.png", desc: "Día 20: Paseo por Murcia" },
  { file: "20_indi_lorca_parque_dia21.png", desc: "Día 21: Indi en Lorca" },
  { file: "21.indi_granada_lago_dia22.png", desc: "Día 22: Indi en el Lago" },
  { file: "22.indi_isa_salon_granada_dia23.png", desc: "Día 23: Salón Granada" },
  { file: "23.indi_coche_navandrinal_dia24.png", desc: "Día 24: Camino a Navandrinal" },
  { file: "24.indi_isa_pueblo_dia25.png", desc: "Día 25: En el Pueblo" },
  { file: "25.isa_guapa_pueblo_dia26.png", desc: "Día 26: Isa la mas guapa" },
  { file: "26.isa_david_indi_piso.png", desc: "Día 27: Ático en el centro" }
];

const securityOverlay = document.getElementById("security-overlay");
const mainContent = document.getElementById("main-content");
const errorMsg = document.getElementById("error-msg");
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function unlock() {
  sessionStorage.setItem(SESSION_KEY, "1");
  securityOverlay.style.display = "none";
  mainContent.classList.remove("hidden");
  runOpening();
}

function showError() {
  errorMsg.style.display = "block";
  passwordInput.focus();
  passwordInput.select?.();
}

async function tryLogin() {
  errorMsg.style.display = "none";
  const input = passwordInput.value || "";

  try {
    if (window.crypto?.subtle) {
      const hashed = await sha256(input);
      if (hashed === PASSWORD_SHA256) return unlock();
      return showError();
    }
  } catch (e) {}

  // Fallback funcional (si quieres activarlo, pon una clave en claro)
  const FALLBACK_PLAIN = null; // ejemplo: "password"
  if (FALLBACK_PLAIN && input === FALLBACK_PLAIN) return unlock();

  showError();
}

loginBtn.addEventListener("click", tryLogin);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") tryLogin();
});

if (sessionStorage.getItem(SESSION_KEY) === "1") {
  unlock();
}

/* ==========================================================
   OPENING
========================================================== */
const opening = document.getElementById("opening");
const skipBtn = document.getElementById("skip-opening");

function runOpening() {
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  opening.classList.remove("hidden");
  opening.setAttribute("aria-hidden", "false");

  const finish = () => {
    opening.classList.add("play-exit");
    setTimeout(() => {
      opening.classList.add("hidden");
      opening.setAttribute("aria-hidden", "true");
      opening.classList.remove("play-exit");
    }, 780);
  };

  if (reduce) setTimeout(finish, 320);
  else setTimeout(finish, 2200);

  skipBtn.onclick = finish;
}

/* ==========================================================
   THEME (auto + toggle)
========================================================== */
const themeBtn = document.getElementById("toggle-theme");
const THEME_KEY = "manga_theme_pref"; // "light" | "dark" | null

function applyTheme(value) {
  if (!value) document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", value);
}

function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY);
  const next = current === "dark" ? "light" : current === "light" ? null : "dark";
  if (next === null) localStorage.removeItem(THEME_KEY);
  else localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  themeBtn.textContent = (next ?? "auto") === "dark" ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem(THEME_KEY));
themeBtn.textContent = (localStorage.getItem(THEME_KEY) ?? "auto") === "dark" ? "☀️" : "🌙";
themeBtn.addEventListener("click", toggleTheme);

/* ==========================================================
   BUILD COMIC (irregular shapes + mobile-friendly)
========================================================== */
const vertical = document.getElementById("comic-vertical");
const horizontalSection = document.getElementById("comic-horizontal");
const strip = document.getElementById("h-strip");
const toggleModeBtn = document.getElementById("toggle-mode");
const heroTip = document.getElementById("hero-tip");
const pageCount = document.getElementById("page-count");
const prevBtn = document.getElementById("prev-page");
const nextBtn = document.getElementById("next-page");

// Variaciones de forma
function shapeClass(i){ return `shape-${i % 5}`; }
// Pequeño tilt variable, suave para móvil
function tiltDeg(i){
  const values = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.5];
  return values[i % values.length];
}

function createPanel(page, i) {
  const panel = document.createElement("article");
  panel.className = `panel ${shapeClass(i)}`;

  const frame = document.createElement("div");
  frame.className = "panel-frame";
  frame.style.setProperty("--tilt", `${tiltDeg(i)}deg`);

  const stamp = document.createElement("div");
  stamp.className = "stamp";
  stamp.textContent = `#${String(i+1).padStart(2,"0")}`;

  const img = document.createElement("img");
  img.loading = "lazy";
  img.decoding = "async";
  img.src = "images/" + page.file;
  img.alt = page.desc;

  frame.appendChild(img);
  frame.appendChild(stamp);

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = page.desc;

  const desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = page.file;

  panel.appendChild(frame);
  panel.appendChild(bubble);
  panel.appendChild(desc);

  return panel;
}

// Vertical panels
mangaPages.forEach((p, i) => vertical.appendChild(createPanel(p, i)));

// Horizontal pages
mangaPages.forEach((p, i) => {
  const page = document.createElement("div");
  page.className = "page";
  page.appendChild(createPanel(p, i));
  strip.appendChild(page);
});

/* ==========================================================
   MODE SWITCH (scroll <-> pages)
========================================================== */
let mode = localStorage.getItem("manga_read_mode") || "scroll";

function setMode(next) {
  mode = next;
  localStorage.setItem("manga_read_mode", mode);

  const isPages = mode === "pages";
  vertical.classList.toggle("hidden", isPages);
  horizontalSection.classList.toggle("hidden", !isPages);

  toggleModeBtn.textContent = isPages ? "🧻" : "📖";
  heroTip.innerHTML = `Modo: <b>${isPages ? "Páginas" : "Scroll"}</b> (pulsa ${isPages ? "🧻" : "📖"} para cambiar)`;

  if (isPages) {
    setTimeout(() => strip.focus(), 80);
    updatePageCount();
  }
}

toggleModeBtn.addEventListener("click", () => setMode(mode === "scroll" ? "pages" : "scroll"));
setMode(mode);

/* ==========================================================
   VERTICAL REVEAL
========================================================== */
const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

if (!reduceMotion) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.18 });

  document.querySelectorAll(".comic-vertical .panel").forEach(p => obs.observe(p));
} else {
  document.querySelectorAll(".comic-vertical .panel").forEach(p => p.classList.add("visible"));
}

/* ==========================================================
   HORIZONTAL NAV (snap + wheel + arrows + buttons)
========================================================== */
function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function getCurrentPageIndex() {
  const pages = Array.from(strip.children);
  const center = strip.scrollLeft + strip.clientWidth / 2;

  let bestIdx = 0;
  let bestDist = Infinity;

  pages.forEach((p, i) => {
    const px = p.offsetLeft + p.clientWidth / 2;
    const d = Math.abs(px - center);
    if (d < bestDist) { bestDist = d; bestIdx = i; }
  });
  return bestIdx;
}

function scrollToPage(idx) {
  const pages = Array.from(strip.children);
  idx = clamp(idx, 0, pages.length - 1);
  const p = pages[idx];
  strip.scrollTo({
    left: p.offsetLeft - (strip.clientWidth - p.clientWidth)/2,
    behavior: reduceMotion ? "auto" : "smooth"
  });
  setTimeout(updatePageCount, 120);
}

function updatePageCount() {
  const idx = getCurrentPageIndex();
  pageCount.textContent = `${idx + 1} / ${mangaPages.length}`;
}

prevBtn.addEventListener("click", () => scrollToPage(getCurrentPageIndex() - 1));
nextBtn.addEventListener("click", () => scrollToPage(getCurrentPageIndex() + 1));

strip.addEventListener("scroll", () => { if (mode === "pages") updatePageCount(); }, { passive: true });

// Wheel -> horizontal (muy útil en desktop; en móvil no molesta)
strip.addEventListener("wheel", (e) => {
  if (mode !== "pages") return;
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    strip.scrollLeft += e.deltaY;
  }
}, { passive: false });

// Keyboard arrows
strip.addEventListener("keydown", (e) => {
  if (mode !== "pages") return;
  if (e.key === "ArrowRight") { e.preventDefault(); scrollToPage(getCurrentPageIndex() + 1); }
  if (e.key === "ArrowLeft")  { e.preventDefault(); scrollToPage(getCurrentPageIndex() - 1); }
});

/* ==========================================================
   PARTICLES (mobile-safe)
========================================================== */
const canvas = document.getElementById("fx-canvas");
const ctx = canvas.getContext("2d", { alpha: true });

let W = 0, H = 0, DPR = 1;
function resizeCanvas(){
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.floor(window.innerWidth);
  H = Math.floor(window.innerHeight);
  canvas.width = Math.floor(W * DPR);
  canvas.height = Math.floor(H * DPR);
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const particles = [];
const MAX = reduceMotion ? 0 : Math.round(Math.min(110, Math.max(36, W / 13)));

function rand(a,b){ return a + Math.random()*(b-a); }

function initParticles(){
  particles.length = 0;
  for(let i=0;i<MAX;i++){
    particles.push({
      x: rand(0,W),
      y: rand(0,H),
      r: rand(0.8, 2.2),
      vx: rand(-0.18, 0.18),
      vy: rand(-0.28, -0.06),
      a: rand(0.10, 0.32)
    });
  }
}
initParticles();

function drawParticles(){
  ctx.clearRect(0,0,W,H);
  if (MAX === 0) return;

  const manual = document.documentElement.getAttribute("data-theme");
  const isDark =
    manual === "dark" ||
    (manual === null && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches);

  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  for(const p of particles){
    p.x += p.vx;
    p.y += p.vy;

    if (p.y < -10) { p.y = H + 10; p.x = rand(0,W); }
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;

    ctx.globalAlpha = p.a;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = isDark ? "rgba(0,212,255,.9)" : "rgba(255,0,85,.8)";
    ctx.fill();
  }
  ctx.restore();

  requestAnimationFrame(drawParticles);
}
requestAnimationFrame(drawParticles);

/* Dev helper: en consola en GitHub Pages
   genHash("TuClaveNueva")
*/
window.genHash = async (plain) => {
  if (!window.crypto?.subtle) {
    console.warn("crypto.subtle no disponible aquí. Prueba en HTTPS (GitHub Pages).");
    return null;
  }
  const h = await sha256(plain);
  console.log("SHA-256:", h);
  return h;
};
