const express = require('express'); // Import Express framework
const path = require('path'); // Import Node.js path module to handle file paths
const expressLayouts = require('express-ejs-layouts'); // Import express-ejs-layouts for layout support in EJS
const app = express(); // Create an instance of the Express application
const ejsmate = require('ejs-mate'); // Import ejs-mate for advanced EJS layout and partial support
const method = require('method-override'); // Import method-override to use HTTP verbs like PUT or DELETE
const { name } = require('ejs'); // Destructure 'name' from EJS (not typically used like this)
const port = 9090; // Define the port number the server will listen on

// Middleware
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.use(expressLayouts); // Enable layout support using express-ejs-layouts
app.use(method('_method')); // Allow method override using query parameter like ?_method=DELETE

app.set('views', path.join(__dirname, 'views')); // Set the directory where EJS view files are located
app.set('view engine', 'ejs'); // Set EJS as the view engine for rendering HTML
app.set('views', path.join(__dirname, 'views')); // (Duplicate) Again sets the views directory path
app.set('layout', 'layout/boilerplate'); // Set the default layout file for express-ejs-layouts
app.engine('ejs', ejsmate); // Use ejs-mate as the rendering engine for EJS to support layouts and partials

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Dashboard' });
});

app.get('/home', (req, res) => {
    res.render('home', { title: 'Dashboard' });
});

// Doctors routes
app.get('/doctors/allDoctors', (req, res) => {
    res.render('doctors/allDoctors', { title: 'All Doctors' });
});
app.get('/doctors/newDoctor', (req, res) => {
    res.render('doctors/newDoctor', { title: 'Add New Doctor' });
});
app.get('/doctors/editDoctor', (req, res) => {
    res.render('doctors/editDoctor', { title: 'Edit Doctor' });
});

// Patients routes
app.get('/patiennts/allPatients', (req, res) => {
    res.render('patiennts/allPatients', { title: 'All Patients' });
});
app.get('/patiennts/newPatient', (req, res) => {
    res.render('patiennts/newPatient', { title: 'Add New Patient' });
});
app.get('/patiennts/editPatient', (req, res) => {
    res.render('patiennts/editPatient', { title: 'Edit Patient' });
});

// Appointments routes
app.get('/allAppointments', (req, res) => {
    res.render('appointments/allAppointments', { title: 'All Appointments' });
});
app.get('/newAppointment', (req, res) => {
    res.render('appointments/newAppointment', { title: 'Add New Appointment' });
});
app.get('/editAppointment', (req, res) => {
    res.render('appointments/editAppointment', { title: 'Edit Appointment' });
});

// Departments routes
app.get('/allDepartments', (req, res) => {
    res.render('department/allDepartments', { title: 'All Departments' });
});
app.get('/newDepartment', (req, res) => {
    res.render('department/newDepartment', { title: 'Add New Department' });
});
app.get('/editDepartment', (req, res) => {
    res.render('department/editDepartment', { title: 'Edit Department' });
});

// Medicines routes
app.get('/allMedicines', (req, res) => {
    res.render('medicine/allMedicines', { title: 'All Medicines' });
});
app.get('/newMedicine', (req, res) => {
    res.render('medicine/newMedicine', { title: 'Add New Medicine' });
});
app.get('/editMedicine', (req, res) => {
    res.render('medicine/editMedicine', { title: 'Edit Medicine' });
});

// Bills routes
app.get('/allBills', (req, res) => {
    res.render('bills/allBills', { title: 'All Bills' });
});
app.get('/newBill', (req, res) => {
    res.render('bills/newBill', { title: 'Add New Bill' });
});
app.get('/editBill', (req, res) => {
    res.render('bills/editBill', { title: 'Edit Bill' });
});

// Reports routes
app.get('/allReports', (req, res) => {
    res.render('reports/allReports', { title: 'All Reports' });
});
app.get('/newReport', (req, res) => {
    res.render('reports/newReport', { title: 'Add New Report' });
});
app.get('/editReport', (req, res) => {
    res.render('reports/editReport', { title: 'Edit Report' });
});

// Settings routes
app.get('/profileSettings', (req, res) => {
    res.render('settings/profileSettings', { title: 'Profile Settings' });
});
app.get('/systemSettings', (req, res) => {
    res.render('settings/systemSettings', { title: 'System Settings' });
});



// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



