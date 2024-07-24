
    const form = document.getElementById('registrationForm');
    const recordList = document.getElementById('recordList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addStudent();
    });

    function addStudent() {
        const name = document.getElementById('name').value;
        const studentId = document.getElementById('studentId').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const className = document.getElementById('class').value;
        const address = document.getElementById('address').value;

        if (!name || !studentId || !email || !contact || !className || !address) {
            alert('Please fill all fields.');
            return;
        }

        const student = { name, studentId, email, contact, className, address };
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
        form.reset();
    }

    function displayStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        recordList.innerHTML = '';
        students.forEach((student, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <p>Name: ${student.name}</p>
                <p>ID: ${student.studentId}</p>
                <p>Email: ${student.email}</p>
                <p>Contact: ${student.contact}</p>
                <p>Class: ${student.className}</p>
                <p>Address: ${student.address}</p>
                <button onclick="deleteStudent(${index})">Delete</button>
                <button id="btn", onclick="editStudent(${index})">Edit</button>
            `;
            recordList.appendChild(li);
        });
    }

    window.deleteStudent = function(index) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
    };

    window.editStudent = function(index) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        const student = students[index];
        document.getElementById('name').value = student.name;
        document.getElementById('studentId').value = student.studentId;
        document.getElementById('email').value = student.email;
        document.getElementById('contact').value = student.contact;
        document.getElementById('class').value = student.className;
        document.getElementById('address').value = student.address;
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
    };

    displayStudents();
;
