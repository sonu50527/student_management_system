// HTML elements ko select karna
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

// Ek khali array (list) banayein jisme students ka data save hoga
let students = [];

// Jab form submit hoga (Add Student button dabaenge)
studentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Page ko reload hone se rokna

    // Inputs se value nikalna
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const grade = document.getElementById('grade').value;

    // Naya student object banana
    const newStudent = { name, rollNo, grade };

    // Array mein student ko jodna
    students.push(newStudent);

    // Form ko khali karna
    studentForm.reset();

    // Table ko fir se update karna
    displayStudents();
});

// Students ko screen par dikhane ka function
function displayStudents() {
    studentTableBody.innerHTML = ''; // Pehle purana data saaf karein

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNo}</td>
            <td>${student.grade}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        studentTableBody.appendChild(row);
    });
}

// Student ko delete karne ka function
function deleteStudent(index) {
    students.splice(index, 1); // List se us number wale student ko hatana
    displayStudents(); // Table ko fir se refresh karna
}