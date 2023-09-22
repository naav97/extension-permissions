chrome.management.getAll((extensions) => {
  const extensionList = document.getElementById('extension-list');
  
  extensions.forEach((extension) => {
    const li = document.createElement('li');
    li.textContent = `Name: ${extension.name}, Permissions: ${extension.permissions.join(', ')}`;
    extensionList.appendChild(li);
  });
});
