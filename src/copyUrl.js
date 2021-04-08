window.onload = async () => {
  await copy();
  document.getElementById("copyButton").addEventListener("click", copy);
};

const copy = async () => {
  await chrome.tabs.query(
    { active: true, currentWindow: true },
    async (tabs) => {
      const cleanURL = tabs[0].url.split("?")[0];
      await navigator.clipboard.writeText(cleanURL);
      confirmCopy();
      const urlBox = document.getElementById("urlBox");
      urlBox.value = cleanURL;
      urlBox.select();
    }
  );
};

const confirmCopy = async () => {
  const confirmation = document.getElementById("copied");
  confirmation.style.visibility = "visible";
  await new Promise((resolve) => setTimeout(resolve, 3000));
  confirmation.style.visibility = "hidden";
};
