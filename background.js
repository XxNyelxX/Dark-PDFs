chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.toLowerCase().endsWith('.pdf')) {
        if (!changeInfo.url.includes('viewer.html')) {
        
        const miVisor = chrome.runtime.getURL("pdfjs/web/viewer.html") + "?file=" + encodeURIComponent(changeInfo.url);
        
        chrome.tabs.update(tabId, { url: miVisor });
        }
    }
});