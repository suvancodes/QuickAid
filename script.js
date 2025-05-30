const API_KEY = 'YOUR_GEMINI_API_KEY'; // ⛔ DO NOT use frontend for real deployments

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  inputField.value = "";
  addMessage("🧍 You", userMessage);

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMessage }] }]
        })
      }
    );

    const data = await res.json();
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Sorry, no response.";
    addMessage("🤖 QuickAid", botReply);
  } catch (err) {
    console.error(err);
    addMessage("❌ Error", "Something went wrong. Try again later.");
  }
}

function addMessage(sender, text) {
  const log = document.getElementById("chat-log");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong><br>${text}<br><br>`;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}
