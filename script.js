const API_KEY =
  "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";

const chatBox = document.querySelector(".chat-box");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  // show user message
  addMessage(userText, "user");
  input.value = "";

  // thinking bubble
  const thinkingMsg = document.createElement("div");
  thinkingMsg.classList.add("message", "ai");
  thinkingMsg.textContent = "Exio is thinking...";
  chatBox.appendChild(thinkingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Exio, a calm emotional AI companion. Speak warmly and supportively.",
          },
          { role: "user", content: userText },
        ],
      }),
    });

    const data = await response.json();

    chatBox.removeChild(thinkingMsg);

    const aiReply = data.choices[0].message.content;
    addMessage(aiReply, "ai");
  } catch (error) {
    chatBox.removeChild(thinkingMsg);
    addMessage("Sorry… something went wrong.", "ai");
    console.error(error);
  }
}
