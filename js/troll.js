let trollMessage = document.getElementById("troll-message");
let generatedText = document.getElementById("generated-text");


function transformMessage(message) {
  let trollMessage = '';

  for (let i = 0; i < message.length; i++) {
    if (i % 2 === 0) {
      trollMessage += message[i].toLowerCase();
    } else {
      trollMessage += message[i].toUpperCase();
    }
  }

  return trollMessage;
}


function copyToClipboard(message) {
    navigator.clipboard.writeText(message)
        .then(() => {
            alert("Copied the text: " + message);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
}


document.addEventListener("DOMContentLoaded", () => {
    let submitButton = document.getElementById("submitBtn");

    submitButton.addEventListener("click", () => {
        let actualMessage = transformMessage(trollMessage.value.trim())
        copyToClipboard(actualMessage);
    });

});


