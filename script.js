let medicationData = [];


const medicationForm = document.querySelector('#medication-form');
const medicationList = document.querySelector('#medication-list');
const reminderForm = document.querySelector('#reminder-form');
const reminderList = document.querySelector('#reminder-list');


medicationForm.addEventListener('submit', addMedication);
reminderForm.addEventListener('submit', addReminder);


function addMedication(e) {
    e.preventDefault();

    // Get form values
    const medicationName = document.querySelector('#medication-name').value;
    const dosage = document.querySelector('#dosage').value;

    // Create medication object
    const medication = {
        name: medicationName,
        dosage: dosage
    };

    // Add medication to data array
    medicationData.unshift(medication);

    // Render medication list
    renderMedicationList();

    // Update dosage information
    updateDosageInformation();
}

function addReminder(e) {
    e.preventDefault();

    // Get reminder text
    const reminderText = document.querySelector('#reminder').value;

    // Create reminder list item
    const reminderListItem = document.createElement('li');
    reminderListItem.textContent = reminderText;

    // Append reminder list item to reminder list
    reminderList.appendChild(reminderListItem);
}

function renderMedicationList() {
    medicationList.innerHTML = '';

    medicationData.forEach(medication => {
        const medicationListItem = document.createElement('li');
        medicationListItem.textContent = `${medication.name} - ${medication.dosage}`;
        medicationList.appendChild(medicationListItem);
    });
}

function updateDosageInformation() {
    const firstMedication = medicationData[0];

    document.querySelector('#dosage-information').textContent = `${firstMedication.name} - ${firstMedication.dosage}`;
}
