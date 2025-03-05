// Fetch les données de classement depuis l'API
fetch('http://192.168.64.175/classement')
  .then(response => {
    if (!response.ok) {
      throw new Error('La réponse du réseau n\'est pas correcte');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Supposons que 'data' est un tableau de classements
    const classement = document.createElement('ul');
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.team}: ${item.points} points`;
      classement.appendChild(listItem);
    });
    document.body.appendChild(classement);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données de classement:', error);
  });