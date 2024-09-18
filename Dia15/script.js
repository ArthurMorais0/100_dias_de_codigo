document.getElementById("textInput").addEventListener("input", function() {
    const text = this.value;
    const charCount = text.length;
    document.getElementById("charCount").textContent = charCount;
  });
  