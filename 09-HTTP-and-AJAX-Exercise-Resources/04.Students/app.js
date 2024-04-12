function attachEvents() {
  const studentsURL = 'http://localhost:3030/jsonstore/collections/students';
  
  const submitButtonElement = document.getElementById('submit');
  submitButtonElement.addEventListener('click', createStudentRecord);
  
  async function createStudentRecord() {
    const firstNameInputElement = document.querySelector('input[name=firstName]');
    const lastNameInputElement = document.querySelector('input[name=lastName]');
    const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]');
    const gradeInputElement = document.querySelector('input[name=grade]');
    
    const firstName = firstNameInputElement.value.trim();
    const lastName = lastNameInputElement.value.trim();
    const facultyNumber = facultyNumberInputElement.value.trim();
    const grade = gradeInputElement.value.trim();
    
    if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
      await fetch(studentsURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstNameInputElement.value,
          lastName: lastNameInputElement.value,
          facultyNumber: facultyNumberInputElement.value,
          grade: gradeInputElement.value,
        })
      });
    }
    
    clearInputFields();
    updateStudentsTable();
  }
  
  function clearInputFields() {
    const firstNameInputElement = document.querySelector('input[name=firstName]');
    const lastNameInputElement = document.querySelector('input[name=lastName]');
    const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]');
    const gradeInputElement = document.querySelector('input[name=grade]');
    
    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    facultyNumberInputElement.value = '';
    gradeInputElement.value = '';
  }
  
  async function updateStudentsTable() {
    const tbodyElement = document.querySelector('table tbody');
    tbodyElement.innerHTML = '';

    const studentsResponse = await fetch(studentsURL);
    const students = await studentsResponse.json();
    
    Object.values(students)
    .forEach(student => tbodyElement.appendChild(createRecord(student)));
  }

  updateStudentsTable();
  
  function createRecord(student) {
    const firstNameTdElement = document.createElement('td');
    firstNameTdElement.textContent = student.firstName;
    
    const lastNameTdElement = document.createElement('td');
    lastNameTdElement.textContent = student.lastName;
    
    const facultyNumberTdElement = document.createElement('td');
    facultyNumberTdElement.textContent = student.facultyNumber;
    
    const gradeTdElement = document.createElement('td');
    gradeTdElement.textContent = student.grade;
    
    const trElement = document.createElement('tr');
    trElement.appendChild(firstNameTdElement);
    trElement.appendChild(lastNameTdElement);
    trElement.appendChild(facultyNumberTdElement);
    trElement.appendChild(gradeTdElement);
    
    return trElement;
  }
}

attachEvents();