let refreshIntervalId;

document.getElementById('startRefresh').addEventListener('click', () => {
  const refreshTime = parseInt(document.getElementById('refreshTime').value);

  if (refreshTime && refreshTime > 0) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.runtime.sendMessage({ command: 'start', time: refreshTime, tabId: tabs[0].id });
    });
  }
});

document.getElementById('stopRefresh').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.runtime.sendMessage({ command: 'stop', tabId: tabs[0].id });
  });
});
