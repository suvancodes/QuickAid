const guides = {
  bleeding: {
    title: "Bleeding",
    steps: [
      "Apply direct pressure with a clean cloth.",
      " ",
      "Keep applying pressure until bleeding stops.",
      " ",
      "Elevate the injured area if possible.",
      " ",
      "Seek medical help if bleeding is severe."
    ]
  },
  burns: {
    title: "Burns",
    steps: [
      "Cool the burn under running water for 10 minutes.",
      " ",
      "Do not apply ice or greasy substances.",
      " ",
      "Cover with a clean cloth or sterile dressing.",
      " ",
      "Seek medical help for serious burns."
    ]
  },
  choking: {
    title: "Choking",
    steps: [
      "Ask if the person is choking and can speak.",
      " ",
      "If not, give 5 back blows between the shoulder blades.",
      " ",
      "Then give 5 abdominal thrusts (Heimlich maneuver).",
      " ",
      "Repeat until the object is expelled or help arrives."
    ]
  },
  cpr: {
    title: "CPR",
    steps: [
      "Check responsiveness and breathing.",
      " ",
      "Call emergency services.",
      " ",
      "Start chest compressions (100–120/min).",
      " ",
      "Give 2 rescue breaths after every 30 compressions."
    ]
  }
};

function showGuide(key) {
  const guide = guides[key];
  document.getElementById("guide-title").innerText = guide.title;
  const stepsList = document.getElementById("guide-steps");
  stepsList.innerHTML = "";

  guide.steps.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    stepsList.appendChild(li);
  });

  document.getElementById("emergency-list").classList.add("hidden");
  document.getElementById("guide").classList.remove("hidden");
}

function goBack() {
  document.getElementById("guide").classList.add("hidden");
  document.getElementById("emergency-list").classList.remove("hidden");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}

window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
};

