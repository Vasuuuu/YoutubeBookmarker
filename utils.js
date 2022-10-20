export async function getActiveTabURL() {
 //   let queryOptions = {active:true, currentWindow:true};
 //   let [tab] = await chrome.tabs.query(queryOptions);
 const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true
 });
    return tabs[0];
};
