fetch('navigation-panel.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navigation_panel').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation panel:', error));
