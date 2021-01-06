document.querySelector('#saveBtn').addEventListener('click', () => {
  window.close();
  const fixedValue = document.querySelector('#fixedValue').value;
  const skipValue = document.querySelector('#skipValue').value;
  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
    tabs.forEach(tab =>
      chrome.tabs.sendMessage(tab.id, { fixedValue, skipValue } )
    );
  });
});

document.querySelector('#clearBtn').addEventListener('click', () => {
  window.close();
  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
    tabs.forEach(tab =>
      chrome.tabs.sendMessage(tab.id, { } )
    );
  });
});
