/**
 * WanderLand AI Chat Widget — Client-Side Logic
 */
(function () {
  "use strict";

  // DOM Elements
  const chatWidget = document.getElementById("chat-widget");
  const chatToggleBtn = document.getElementById("chat-toggle-btn");
  const chatPanel = document.getElementById("chat-panel");
  const chatMessages = document.getElementById("chat-messages");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatSendBtn = document.getElementById("chat-send-btn");
  const chatMinimizeBtn = document.getElementById("chat-minimize-btn");
  const chatSuggestions = document.getElementById("chat-suggestions");
  const toggleIcon = document.querySelector(".chat-toggle-icon");
  const toggleClose = document.querySelector(".chat-toggle-close");

  if (!chatWidget) return; // Exit if widget not found

  // If we're in guest view (no chat form), we still want to initialize the toggle functionality
  // but skip chat-specific features that require the form elements
  const isGuestView = !chatForm || !chatInput || !chatSendBtn;

  let isOpen = false;
  let isLoading = false;

  // ========== Toggle Chat Panel ==========
  function openChat() {
    isOpen = true;
    chatPanel.style.display = "flex";
    chatWidget.classList.add("open");
    toggleIcon.style.display = "none";
    toggleClose.style.display = "flex";

    // Trigger animation
    requestAnimationFrame(() => {
      chatPanel.classList.add("show");
    });

    if (chatInput) chatInput.focus();
    scrollToBottom();
  }

  function closeChat() {
    isOpen = false;
    chatPanel.classList.remove("show");
    chatWidget.classList.remove("open");
    toggleIcon.style.display = "flex";
    toggleClose.style.display = "none";

    setTimeout(() => {
      chatPanel.style.display = "none";
    }, 400);
  }

  chatToggleBtn.addEventListener("click", () => {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  });

  chatMinimizeBtn.addEventListener("click", () => {
    closeChat();
  });

  // ========== Send Message ==========
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message || isLoading) return;
      sendMessage(message);
    });
  }

  async function sendMessage(message) {
    // Add user message to UI
    addUserMessage(message);
    chatInput.value = "";
    chatInput.focus();

    // Show typing indicator
    showTypingIndicator();
    isLoading = true;
    chatSendBtn.disabled = true;

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Simulate slight delay for natural feel
      await delay(500 + Math.random() * 800);

      hideTypingIndicator();
      addBotMessage(data.response, data.type);

      // Update suggestions
      if (data.suggestions) {
        updateSuggestions(data.suggestions);
      }
    } catch (error) {
      console.error("Chat error:", error);
      hideTypingIndicator();
      addBotMessage(
        "Sorry, I'm having trouble connecting right now. 😅 Please try again in a moment!",
        "error"
      );
    } finally {
      isLoading = false;
      chatSendBtn.disabled = false;
    }
  }

  // ========== Message Rendering ==========
  function addUserMessage(text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message user-message";
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="message-bubble">${escapeHtml(text)}</div>
        <span class="message-time">${getCurrentTime()}</span>
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  function addBotMessage(text, type) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message bot-message";

    const formattedText = formatMarkdown(text);

    messageDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fa-solid fa-compass"></i>
      </div>
      <div class="message-content">
        <div class="message-bubble">${formattedText}</div>
        <span class="message-time">${getCurrentTime()}</span>
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  // ========== Typing Indicator ==========
  function showTypingIndicator() {
    const existing = document.getElementById("typing-indicator");
    if (existing) return;

    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "typing-indicator";
    typingDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fa-solid fa-compass"></i>
      </div>
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
  }

  // ========== Suggestions ==========
  function updateSuggestions(suggestions) {
    if (!chatSuggestions) return;
    chatSuggestions.innerHTML = "";
    suggestions.forEach((text) => {
      const chip = document.createElement("button");
      chip.className = "suggestion-chip";
      chip.setAttribute("data-message", text);
      chip.textContent = getSuggestionEmoji(text) + " " + text;
      chip.addEventListener("click", () => {
        if (!isLoading) {
          sendMessage(text);
        }
      });
      chatSuggestions.appendChild(chip);
    });
  }

  // Delegate click on initial suggestion chips
  if (chatSuggestions) {
    chatSuggestions.addEventListener("click", (e) => {
      const chip = e.target.closest(".suggestion-chip");
      if (chip && !isLoading) {
        const message = chip.getAttribute("data-message");
        sendMessage(message);
      }
    });
  }

  function getSuggestionEmoji(text) {
    const lower = text.toLowerCase();
    if (lower.includes("recommend") || lower.includes("places")) return "🌟";
    if (lower.includes("hotel") || lower.includes("stay")) return "🏨";
    if (lower.includes("tip")) return "💡";
    if (lower.includes("budget") || lower.includes("cheap")) return "💰";
    if (lower.includes("review") || lower.includes("feedback")) return "📊";
    if (lower.includes("safe")) return "🛡️";
    if (lower.includes("pack")) return "🎒";
    if (lower.includes("all") || lower.includes("list")) return "📋";
    if (lower.includes("more")) return "➕";
    return "✨";
  }

  // ========== Utilities ==========
  function scrollToBottom() {
    if (!chatMessages) return;
    requestAnimationFrame(() => {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Simple markdown-like formatting for bot responses
   * Supports: **bold**, *italic*, [text](url), newlines, bullet lists
   */
  function formatMarkdown(text) {
    if (!text) return "";

    let html = escapeHtml(text);

    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Italic: *text*
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Links: [text](url)
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_self">$1</a>'
    );

    // Bullet points (lines starting with •, -, or numbers)
    html = html.replace(/^[•\-]\s+(.+)$/gm, "<li>$1</li>");
    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*<\/li>\s*)+)/g, "<ul>$1</ul>");

    // Line breaks
    html = html.replace(/\n/g, "<br>");

    // Clean up multiple <br>
    html = html.replace(/(<br>\s*){3,}/g, "<br><br>");

    return html;
  }

  // ========== Keyboard Shortcut ==========
  document.addEventListener("keydown", (e) => {
    // Escape to close chat
    if (e.key === "Escape" && isOpen) {
      closeChat();
    }
  });

  // ========== Session Persistence ==========
  // Store chat state in sessionStorage to persist across page navigations
  function saveChatHistory() {
    if (chatMessages) {
      const messages = chatMessages.innerHTML;
      sessionStorage.setItem("wanderland_chat_messages", messages);
    }
    sessionStorage.setItem("wanderland_chat_open", isOpen ? "true" : "false");
  }

  function restoreChatHistory() {
    const savedMessages = sessionStorage.getItem("wanderland_chat_messages");
    const wasOpen = sessionStorage.getItem("wanderland_chat_open");

    if (savedMessages && chatMessages) {
      chatMessages.innerHTML = savedMessages;
      scrollToBottom();
    }

    if (wasOpen === "true") {
      openChat();
    }
  }

  // Save on page unload
  window.addEventListener("beforeunload", saveChatHistory);

  // Restore on load
  restoreChatHistory();
})();
