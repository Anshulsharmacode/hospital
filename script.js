document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("home-link").addEventListener("click", () => {
        loadContent("home");
    });
    document.getElementById("patients-link").addEventListener("click", () => {
        loadContent("patients");
    });
    document.getElementById("appointments-link").addEventListener("click", () => {
        loadContent("appointments");
    });
    document.getElementById("staff-link").addEventListener("click", () => {
        loadContent("staff");
    });
    document.getElementById("billing-link").addEventListener("click", () => {
        loadContent("billing");
    });
    document.getElementById("records-link").addEventListener("click", () => {
        loadContent("records");
    });
});

function loadContent(page) {
    const content = document.getElementById("content");

    switch(page) {
        case "home":
            content.innerHTML = "<h2>Welcome to the Hospital Management System</h2><p>Select a section from the menu to manage.</p>";
            break;
        case "patients":
            content.innerHTML = "<h2>Manage Patients</h2><p>Patient list and details go here.</p>";
            break;
        case "appointments":
            content.innerHTML = "<h2>Manage Appointments</h2><p>Appointment list and scheduling go here.</p>";
            break;
        case "staff":
            content.innerHTML = "<h2>Manage Staff</h2><p>Staff list and details go here.</p>";
            break;
        case "billing":
            content.innerHTML = "<h2>Billing</h2><p>Billing details go here.</p>";
            break;
        case "records":
            content.innerHTML = "<h2>Medical Records</h2><p>Medical records go here.</p>";
            break;
        default:
            content.innerHTML = "<h2>Welcome to the Hospital Management System</h2><p>Select a section from the menu to manage.</p>";
    }
}
