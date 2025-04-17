async function injectWidget(sampleData) {
  const res = await fetch(chrome.runtime.getURL('widget.html'));
  const html = await res.text();
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = chrome.runtime.getURL("widget.css");

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.head.appendChild(style);
  document.body.appendChild(wrapper);

  const companyName = document.getElementById("company-name");
  const matchScoreBar = document.getElementById("match-score-bar");
  const matchScoreText = document.getElementById("match-score-text");
  const accountStatus = document.getElementById("account-status");

  // Fill data
  companyName.textContent = sampleData.companyName;
  matchScoreText.textContent = `${sampleData.matchScore}/100`;
  matchScoreBar.style.width = `${sampleData.matchScore}%`;

  accountStatus.textContent = sampleData.accountStatus;
  accountStatus.classList.add(
    sampleData.accountStatus === "Target" ? "target" : "not-target"
  );
}

async function fetchProfileData() {
  const profileId = window.location.pathname.split("/in/")[1]?.replace("/", "");

  try {
    const response = await fetch(`https://your-api.com/profiles/${profileId}`);
    const data = await response.json();

    const sampleData = {
      companyName: data.companyName,
      matchScore: data.matchScore,
      accountStatus: data.accountStatus
    };

    injectWidget(sampleData);
  } catch (error) {
    console.error("API error. Falling back to default data", error);

    injectWidget({
      companyName: "Default Corp",
      matchScore: 50,
      accountStatus: "Not Target"
    });
  }
}

fetchProfileData();
