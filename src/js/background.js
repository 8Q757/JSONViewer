chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'jsonviewer.html' })
});