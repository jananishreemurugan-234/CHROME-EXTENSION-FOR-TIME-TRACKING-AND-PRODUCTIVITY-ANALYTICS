let activeTab = null;
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    await updateTime();
    const tab = await chrome.tabs.get(activeInfo.tabId);
    activeTab = new URL(tab.url).hostname;
    startTime = Date.now();
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.status === 'complete') {
        await updateTime();
        activeTab = new URL(tab.url).hostname;
        startTime = Date.now();
    }
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        await updateTime();
        activeTab = null;
    } else {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab) {
            activeTab = new URL(tab.url).hostname;
            startTime = Date.now();
        }
    }
});

async function updateTime() {
    if (!activeTab) return;
    const elapsed = (Date.now() - startTime) / 1000;
    chrome.storage.local.get("webData", (data) => {
        const webData = data.webData || {};
        webData[activeTab] = (webData[activeTab] || 0) + elapsed;
        chrome.storage.local.set({ webData });
    });
}