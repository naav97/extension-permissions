let permDic = {
    "peligro":['bookmarks', 'nativeMessaging', 'history'],
    "accex":['activeTab', 'browserSettings', 'clipboardRead', 'cookies', 'debugger', 'declarativeNetRequest', 'declarativeNetRequestFeedback', 'declarativeNetRequestWithHostAccess', 'desktopCapture', 'downloads', 'downloads.open', 'downloads.ui', 'geolocation', 'identity', 'management', 'pageCapture', 'privacy', 'proxy', 'scripting', 'system.display', 'tabCapture', 'tabHide', 'tabs', 'webAuthenticationProxy', 'webRequest', 'webRequestBlocking'],
    "accmod":['contextualIdentities', 'devtools', 'enterprise.hardwarePlatform', 'fontSettings', 'power', 'printerProvider', 'sessions', 'system.cpu', 'topSites', 'tts', 'ttsEngine'],
    "sinpel":['alarms', 'browsingData', 'captivePortal', 'clipboardWrite', 'contentSettings', 'contextMenus', 'declarativeContent', 'dns', 'find', 'gcm', 'idle', 'menus', 'notifications', 'offscreen', 'pkcs11', 'search', 'sidePanel', 'storage', 'system.memory', 'system.storage', 'tabGroups', 'theme', 'unlimitedStorage', 'webNavigation']
}

chrome.management.getAll((extensions) => {
    const extensionList = document.getElementById('extension-list');
    const peligroList = document.getElementById('ext-peli');
    extensions.forEach((extension) => {
        const li = document.createElement('li');
        li.textContent = `${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
        extensionList.appendChild(li);
        if(extension.permissions.some(per => { return permDic.peligro.includes(per); })) {
            li.style.backgroundColor = "#ff5e5e";
            const lip = document.createElement('li');
            lip.textContent = `Name: ${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
            peligroList.appendChild(lip);
        }
        else if(extension.permissions.some(per => { return permDic.accex.includes(per); })) {
            li.style.backgroundColor = "#f9cb8b";
        }
        else if(extension.permissions.some(per => { return permDic.accmod.includes(per); })) {
            li.style.backgroundColor = "#d9ff7d";
        }
        else if(extension.permissions.some(per => { return permDic.sinpel.includes(per); })) {
            li.style.backgroundColor = "#aac7ed";
        }
    });
});

document.getElementById('inst-btn').addEventListener('click', () => {
    document.getElementById('inst-tab').classList.add('active');
    document.getElementById('peli-tab').classList.remove('active');
    document.getElementById('expl-tab').classList.remove('active');
});
document.getElementById('peli-btn').addEventListener('click', () => {
    document.getElementById('peli-tab').classList.add('active');
    document.getElementById('inst-tab').classList.remove('active');
    document.getElementById('expl-tab').classList.remove('active');
});
document.getElementById('expl-btn').addEventListener('click', () => {
    document.getElementById('expl-tab').classList.add('active');
    document.getElementById('inst-tab').classList.remove('active');
    document.getElementById('peli-tab').classList.remove('active');
});
