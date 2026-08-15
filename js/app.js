const DESTINATIONS = [
  { id: "new-zealand", name: "New Zealand" },
  { id: "barcelona", name: "Barcelona" },
  { id: "ireland", name: "Ireland" },
  { id: "seattle", name: "Seattle" },
  { id: "canada", name: "Canada" },
  { id: "paris", name: "Paris" },
  { id: "home", name: "Your Second Home" },
  { id: "new-york", name: "New York" },
  { id: "london", name: "London" },
  { id: "scotland", name: "Scotland" },
  { id: "sydney", name: "Sydney" },
  { id: "denmark", name: "Denmark" },
  { id: "norway", name: "Norway" },
];

const DATE_LABELS = {
  "2026-08-16": "16 Aug 2026",
};

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

const selected = {
  destinationId: "",
  destinationName: "",
  date: "",
};

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

function openResults() {
  resultContent.dataset.origin = "Seoul";
  resultContent.dataset.destination = selected.destinationId;
  resultContent.dataset.destinationName = selected.destinationName;
  resultContent.dataset.date = selected.date;
  results.hidden = false;
  document.body.classList.add("is-locked");
}

function closeResults() {
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
