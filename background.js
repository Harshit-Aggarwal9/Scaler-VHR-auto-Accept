let refreshIntervals = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === 'start') {
    const { time, tabId } = message;

    if (refreshIntervals[tabId]) {
      clearInterval(refreshIntervals[tabId]);  // Clear any existing interval
    }

    refreshIntervals[tabId] = setInterval(() => {
      chrome.tabs.reload(tabId);
    }, time * 1000);  // Convert time to milliseconds
  } else if (message.command === 'stop') {
    const { tabId } = message;

    if (refreshIntervals[tabId]) {
      clearInterval(refreshIntervals[tabId]);
      delete refreshIntervals[tabId];
    }
  }
});
