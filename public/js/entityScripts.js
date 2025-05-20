// Generic client-side script to handle dynamic addition of entities using localStorage

document.addEventListener('DOMContentLoaded', () => {
  // Get the entity name from a data attribute on the body or a global variable
  const entity = document.body.getAttribute('data-entity');
  if (!entity) return;

  // Handle form submission for adding new entity
  const addForm = document.getElementById('addForm');
  if (addForm) {
    addForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get existing entities from localStorage or initialize empty array
      let entities = JSON.parse(localStorage.getItem(entity)) || [];

      // Create new entity object from form inputs
      const newEntity = {};
      const inputs = addForm.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        if (input.id) {
          newEntity[input.id] = input.value;
        }
      });

      // Assign an ID
      newEntity.id = entities.length + 1;

      // Add new entity to array
      entities.push(newEntity);

      // Save updated array to localStorage
      localStorage.setItem(entity, JSON.stringify(entities));

      // Redirect to all entity page
      window.location.href = `/` + entity + `/all` + capitalizeFirstLetter(entity);
    });
  }

  // On all entity page, render entities from localStorage
  const tableBody = document.getElementById('entityTableBody');
  if (tableBody) {
    let entities = JSON.parse(localStorage.getItem(entity)) || [];
    entities.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = generateRowHTML(entity, item);
      tableBody.appendChild(row);
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function generateRowHTML(entity, item) {
    // Customize row HTML based on entity type
    switch(entity) {
      case 'doctors':
        return `
          <td>${item.id}</td>
          <td>${item.name || ''}</td>
          <td>${item.specialization || ''}</td>
          <td>${item.phone || ''}</td>
          <td>${item.email || ''}</td>
          <td>${item.qualifications || ''}</td>
          <td>${item.experience || ''}</td>
          <td>${item.availability || ''}</td>
        `;
      case 'appointments':
        return `
          <td>${item.id}</td>
          <td>${item.patient || ''}</td>
          <td>${item.doctor || ''}</td>
          <td>${item.date || ''}</td>
          <td>${item.status || ''}</td>
        `;
      case 'bills':
        return `
          <td>${item.id}</td>
          <td>${item.patient || ''}</td>
          <td>${item.amount || ''}</td>
          <td>${item.date || ''}</td>
        `;
      case 'department':
        return `
          <td>${item.id}</td>
          <td>${item.name || ''}</td>
          <td>${item.description || ''}</td>
        `;
      case 'medicine':
        return `
          <td>${item.id}</td>
          <td>${item.name || ''}</td>
          <td>${item.brand || ''}</td>
          <td>${item.price || ''}</td>
          <td>${item.quantity || ''}</td>
        `;
      case 'patiennts':
        return `
          <td>${item.id}</td>
          <td>${item.name || ''}</td>
          <td>${item.age || ''}</td>
          <td>${item.gender || ''}</td>
          <td>${item.phone || ''}</td>
          <td>${item.email || ''}</td>
        `;
      case 'reports':
        return `
          <td>${item.id}</td>
          <td>${item.patient || ''}</td>
          <td>${item.type || ''}</td>
          <td>${item.date || ''}</td>
        `;
      default:
        return `<td colspan="5">No data</td>`;
    }
  }
});
