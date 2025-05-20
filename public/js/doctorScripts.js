// Handle form submission on newDoctor page
document.addEventListener('DOMContentLoaded', () => {
  const addDoctorForm = document.getElementById('addDoctorForm');
  if (addDoctorForm) {
    addDoctorForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get existing doctors from localStorage or initialize empty array
      let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

      // Create new doctor object
      const newDoctor = {
        id: doctors.length + 1,
        name: document.getElementById('doctorName').value,
        specialization: document.getElementById('specialization').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        qualifications: document.getElementById('qualifications').value,
        experience: document.getElementById('experience').value,
        availability: document.getElementById('availability').value
      };

      // Add new doctor to array
      doctors.push(newDoctor);

      // Save updated array to localStorage
      localStorage.setItem('doctors', JSON.stringify(doctors));

      // Redirect to allDoctors page
      window.location.href = '/doctors/allDoctors';
    });
  }

  // On allDoctors page, render doctors from localStorage
  const doctorsTableBody = document.getElementById('doctorsTableBody');
  if (doctorsTableBody) {
    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    doctors.forEach(doctor => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${doctor.id}</td>
        <td>${doctor.name}</td>
        <td>${doctor.specialization}</td>
        <td>${doctor.phone}</td>
        <td>${doctor.email}</td>
        <td>${doctor.qualifications}</td>
        <td>${doctor.experience}</td>
        <td>${doctor.availability}</td>
      `;
      doctorsTableBody.appendChild(row);
    });
  }
});
