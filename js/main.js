const form = document.getElementById('infoForm');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${phone}</td>
    <td>${address}</td>
  `;
  
  tableBody.appendChild(newRow);
  
  form.reset();
});