chrome.management.getAll((extensions) => {
  const extensionList = document.getElementById('extension-list');
  
  extensions.forEach((extension) => {
    const li = document.createElement('li');
    li.textContent = `Name: ${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
    extensionList.appendChild(li);
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
