// Récupérer les données de classement depuis l'API
fetch('http://192.168.64.175:9100/classement')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // En supposant que 'data' soit un tableau de classements
    const classement = document.createElement('ul');
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.nom}: ${item.points} points`;
      classement.appendChild(listItem);
    });
    document.body.appendChild(classement);
  })
  .catch(error => {
    console.error('Error fetching the ranking data:', error);
  });
