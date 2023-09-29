let permDic = {
    "peligro":['identity', 'nativeMessaging', 'storage', 'cookies'],
    "accex":['activeTab', 'browserSettings', 'clipboardRead', 'debugger', 'declarativeNetRequest', 'declarativeNetRequestFeedback', 'declarativeNetRequestWithHostAccess', 'desktopCapture', 'downloads', 'downloads.open', 'downloads.ui', 'geolocation', 'management', 'pageCapture', 'privacy', 'proxy', 'scripting', 'system.display', 'tabCapture', 'tabHide', 'tabs', 'webAuthenticationProxy', 'webRequest', 'webRequestBlocking']
}

chrome.management.getAll((extensions) => {
    const extensionList = document.getElementById('extension-list');
    const peligroList = document.getElementById('ext-peli');
    extensions.forEach((extension) => {
        const li = document.createElement('li');
        li.textContent = `Name: ${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
        extensionList.appendChild(li);
        if(extension.permissions.some(per => { return permDic.peligro.includes(per); })) {
            li.style.backgroundColor = "#ff5e5e";
            const lip = document.createElement('li');
            lip.textContent = `Name: ${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
            peligroList.appendChild(lip);
        }
    });
});

document.getElementById('inst-btn').addEventListener('click', () => {
    document.getElementById('inst-tab').classList.add('active');
    document.getElementById('peli-tab').classList.remove('active');
});
document.getElementById('peli-btn').addEventListener('click', () => {
    document.getElementById('peli-tab').classList.add('active');
    document.getElementById('inst-tab').classList.remove('active');
});
