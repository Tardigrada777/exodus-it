const renderList = (items) => {
  const root = document.querySelector('ul');
  for (let i = 0; i < items.length; i++) {
    const { text } = items[i];
    const li = document.createElement('li');
    li.innerHTML = text;
    root.appendChild(li);
  }
};
