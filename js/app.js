const DESTINATIONS = [
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    headline: "아쉽게도 이미 다녀오신 곳이네요 ㅠㅠ",
    sub: "또 가고 싶으신가요? 저희는 모릅니다.",
    photos: ["img/newzealand1.JPEG", "img/newzealand2.JPEG"],
  },
  {
    id: "barcelona",
    name: "Barcelona",
    flag: "🇪🇸",
    headline: "이미 다녀오신 곳입니다!",
    sub: "그래도 검색 결과는 아주 좋습니다.",
    photos: ["img/Bar1.jpg", "img/Bar2.jpeg", "img/Bar3.jpeg", "img/Bar4.jpg"],
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    headline: "이미 다녀오신 곳입니다.",
    sub: "이곳을 얼마나 좋아하시는지 알고 있습니다.",
    photos: [
      "img/Ire1.jpg",
      "img/Ire2.jpg",
      "img/Ire3.jpg",
      "img/Ire4.jpg",
      "img/Ire5.jpg",
      "img/Ire6.jpeg",
    ],
  },
  {
    id: "seattle",
    name: "Seattle",
    flag: "🇺🇸",
    headline: "이미 다녀오신 곳이지만요.",
    sub: "그래도 다시 검색해드리겠습니다.",
    photos: ["img/Seattle1.jpg", "img/Seattle2.jpg"],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    headline: "오류가 발생했습니다.",
    sub: "너무 예전에 다녀오셔서 기억이 잘 안 나실 수도 있습니다.",
    photos: ["img/Can1.jpg", "img/Can2.jpg"],
  },
  {
    id: "paris",
    name: "Paris",
    flag: "🇫🇷",
    headline: "질리게 가신 곳이잖아요!",
    sub: "진짜 또 가겠다고요?",
    photos: [
      "img/Paris1.jpg",
      "img/Paris2.JPEG",
      "img/Paris3.JPEG",
      "img/Paris4.jpg",
    ],
  },
  {
    id: "home",
    name: "Your Second Home",
    flag: "🏠",
    headline: "여길 왜 검색하셨나요",
    sub: "여름엔 열사, 겨울엔 동사할 수 있습니다",
    photos: [
      "img/home1.JPG",
      "img/home2.JPG",
      "img/home3.JPG",
      "img/home4.JPG",
      "img/home5.jpg",
      "img/home6.jpg",
    ],
  },
  {
    id: "new-york",
    name: "New York",
    flag: "🇺🇸",
    headline: "이미 방문한 여행지입니다.",
    sub: "다음에는 다른 곳을 선택해 주세요. 제발.",
    photos: ["img/NY1.jpg", "img/NY2.jpg", "img/NY3.jpg"],
  },
  {
    id: "london",
    name: "London",
    flag: "🇬🇧",
    headline: "이미 다녀오신 곳이네요 ㅠㅠ",
    sub: "그래도 다시 검색해드릴게요.",
    photos: [
      "img/London1.jpg",
      "img/London2.jpg",
      "img/London3.jpg",
      "img/London4.jpg",
    ],
  },
  {
    id: "scotland",
    name: "Scotland",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    headline: "이미 다녀오신 곳입니다.",
    sub: "여행을 참 많이 다니셨군요.",
    photos: ["img/Scot1.jpg", "img/Scot2.jpg", "img/Scot3.jpg", "img/Scot4.jpg"],
  },
  {
    id: "sydney",
    name: "Sydney",
    flag: "🇦🇺",
    headline: "이미 다녀오신 곳입니다.",
    sub: "다음 여행지를 검색해보세요.",
    photos: ["img/Syd.jpg"],
  },
  {
    id: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    headline: "이미 다녀오신 곳이네요.",
    sub: "최근에도 여행을 다녀오신 것 같은데요...?",
    photos: ["img/dan1.jpg", "img/dan2.JPG"],
  },
  {
    id: "norway",
    name: "Norway",
    flag: "🇳🇴",
    headline: "이미 다녀오신 곳입니다.",
    sub: "여행을 참 많이 다니셨군요. 부럽습니다.",
    photos: ["img/nor1.jpg", "img/nor2.jpg", "img/nor3.jpg"],
  },
];

const DATE_LABELS = {
  "2026-08-16": "16 Aug 2026",
};

const CONFETTI_COLORS = [
  "#1a86c8",
  "#047aa8",
  "#f5c518",
  "#ff6b6b",
  "#4ecdc4",
  "#9b59b6",
  "#ffffff",
  "#ff9f43",
];

const destinationToggle = document.getElementById("destination-toggle");
const destinationPanel = document.getElementById("destination-panel");
const destinationList = document.getElementById("destination-list");
const destinationValue = document.getElementById("destination-value");
const destinationTemplate = document.getElementById("destination-item-template");

const dateToggle = document.getElementById("date-toggle");
const datePanel = document.getElementById("date-panel");
const dateOptions = document.getElementById("date-options");
const dateValue = document.getElementById("date-value");

const searchButton = document.getElementById("search-button");
const results = document.getElementById("results");
const resultContent = document.getElementById("result-content");
const resultClose = document.getElementById("result-close");
const resultAgain = document.getElementById("result-again");
const resultPlace = document.getElementById("result-place");
const resultHeadline = document.getElementById("result-headline");
const resultSub = document.getElementById("result-sub");
const resultGallery = document.getElementById("result-gallery");
const confettiCanvas = document.getElementById("confetti-canvas");

const selected = {
  destinationId: "",
  destinationName: "",
  date: "",
};

let confettiFrame = 0;

function setExpanded(toggle, panel, isOpen) {
  panel.hidden = !isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function closePanels() {
  setExpanded(destinationToggle, destinationPanel, false);
  setExpanded(dateToggle, datePanel, false);
}

function renderDestinations() {
  const fragment = document.createDocumentFragment();

  DESTINATIONS.forEach((destination) => {
    const item = destinationTemplate.content.cloneNode(true);
    const button = item.querySelector("[data-destination]");
    const name = item.querySelector(".option-name");

    button.dataset.destination = destination.id;
    name.textContent = destination.name;
    fragment.append(item);
  });

  destinationList.replaceChildren(fragment);
}

function updateDestinationField(name) {
  destinationValue.innerHTML = `<span class="field-name">${name}</span>`;
}

function updateDateField(label) {
  dateValue.innerHTML = `<span class="field-name">${label}</span>`;
}

function renderGallery(photos) {
  const fragment = document.createDocumentFragment();

  photos.forEach((src) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    fragment.append(image);
  });

  resultGallery.replaceChildren(fragment);
}

function renderResult(destination) {
  resultContent.dataset.origin = "Seoul";
  resultContent.dataset.destination = destination.id;
  resultContent.dataset.destinationName = destination.name;
  resultContent.dataset.date = selected.date;

  resultPlace.textContent = `${destination.flag} ${destination.name}`;
  resultHeadline.textContent = destination.headline;
  resultSub.textContent = destination.sub;
  renderGallery(destination.photos);
  resultContent.scrollTop = 0;
}

function sizeConfettiCanvas() {
  const sheet = confettiCanvas.parentElement;
  const width = sheet.clientWidth;
  const height = sheet.clientHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  confettiCanvas.width = Math.floor(width * dpr);
  confettiCanvas.height = Math.floor(height * dpr);
  confettiCanvas.style.width = `${width}px`;
  confettiCanvas.style.height = `${height}px`;

  const ctx = confettiCanvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width, height };
}

function stopConfetti() {
  cancelAnimationFrame(confettiFrame);
  const ctx = confettiCanvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

function playConfetti() {
  stopConfetti();

  const { ctx, width, height } = sizeConfettiCanvas();
  const count = 70;
  const duration = 2600;
  const start = performance.now();
  const pieces = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: -12 - Math.random() * 80,
    w: 5 + Math.random() * 6,
    h: 7 + Math.random() * 8,
    vx: -1.2 + Math.random() * 2.4,
    vy: 2.4 + Math.random() * 3.2,
    rot: Math.random() * Math.PI,
    vr: -0.18 + Math.random() * 0.36,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
  }));

  function frame(now) {
    const elapsed = now - start;
    ctx.clearRect(0, 0, width, height);

    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rot += piece.vr;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rot);
      ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      ctx.restore();
    });

    if (elapsed < duration) {
      confettiFrame = requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }

  confettiFrame = requestAnimationFrame(frame);
}

function openResults() {
  const destination = DESTINATIONS.find(
    (item) => item.id === selected.destinationId
  );
  if (!destination || selected.date !== "2026-08-16") return;

  renderResult(destination);
  results.hidden = false;
  document.body.classList.add("is-locked");
  playConfetti();
}

function closeResults() {
  stopConfetti();
  results.hidden = true;
  document.body.classList.remove("is-locked");
}

renderDestinations();

destinationToggle.addEventListener("click", () => {
  const willOpen = destinationPanel.hidden;
  setExpanded(dateToggle, datePanel, false);
  setExpanded(destinationToggle, destinationPanel, willOpen);
});

dateToggle.addEventListener("click", () => {
  const willOpen = datePanel.hidden;
  setExpanded(destinationToggle, destinationPanel, false);
  setExpanded(dateToggle, datePanel, willOpen);
});

destinationList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-destination]");
  if (!item) return;

  const id = item.dataset.destination;
  const name = item.querySelector(".option-name")?.textContent ?? "";

  selected.destinationId = id;
  selected.destinationName = name;
  updateDestinationField(name);

  destinationList.querySelectorAll("[data-destination]").forEach((button) => {
    button.classList.toggle("is-selected", button === item);
  });

  setExpanded(destinationToggle, destinationPanel, false);
});

dateOptions.addEventListener("click", (event) => {
  const item = event.target.closest("[data-date]");
  if (!item) return;

  const date = item.dataset.date;
  const label = DATE_LABELS[date];
  if (!label) return;

  selected.date = date;
  updateDateField(label);
  item.classList.add("is-selected");
  setExpanded(dateToggle, datePanel, false);
});

searchButton.addEventListener("click", () => {
  closePanels();
  openResults();
});

resultClose.addEventListener("click", () => {
  closeResults();
});

resultAgain.addEventListener("click", () => {
  closeResults();
});
