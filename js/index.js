document.getElementById('backArrow').addEventListener('click', () => {
  document.querySelector('.list-form').style.display = 'none';
});
document.getElementById('showForm').addEventListener('click', () => {
  document.querySelector('.list-form').style.display = 'flex';
});
document.querySelector('.inbox__icon--completed').addEventListener('click', () => {
  document.getElementById('completed').style.display = 'flex';
});
document.querySelector('.inbox__icon--delete').addEventListener('click', () => {
  document.getElementById('deleted').style.display = 'flex';
});
document.querySelector('.btn-cancel-completed').addEventListener('click', () => {
  document.getElementById('completed').style.display = 'none';
});
document.querySelector('.btn-cancel-delete').addEventListener('click', () => {
  document.getElementById('deleted').style.display = 'none';
});
