window.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  fetch(`https://tp3nuvem-function.azurewebsites.net/api/trackVisit?page=${page}`, {
    method: 'POST'
  }).catch(err => console.log('Erro ao registrar visita:', err));
}); 