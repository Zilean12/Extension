chrome.runtime.onMessage.addListener((request) => {
    document.body.style.backgroundColor = request.color;
  });
  