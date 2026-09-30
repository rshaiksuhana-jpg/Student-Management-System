// Store all students
let students = [];


// ===============================
// ADD STUDENT
// ===============================

function addStudent() {

    // Get values from input boxes
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let branch = document.getElementById("branch").value;
    let rollNo = document.getElementById("rollNo").value;


    // Check if fields are empty
    if (name === "" || age === "" || branch === "" || rollNo === "") {

        alert("Please fill all the details");

        return;
    }


    // Create student
    let student = {

        name: name,
        age: age,
        branch: branch,
        rollNo: rollNo

    };


    // Add student to array
    students.push(student);


    // Display all students
    displayStudents();


    // Clear input boxes
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("rollNo").value = "";
}



// ===============================
// DISPLAY ALL STUDENTS
// ===============================

function displayStudents() {

    let studentDetails =
        document.getElementById("studentDetails");


    // Clear old details
    studentDetails.innerHTML = "";


    // Display every student
    for (let i = 0; i < students.length; i++) {

        studentDetails.innerHTML += `

            <div class="student-card">

                <h3>👤 ${students[i].name}</h3>

                <p>
                    <b>Age:</b> ${students[i].age}
                </p>

                <p>
                    <b>Branch:</b> ${students[i].branch}
                </p>

                <p>
                    <b>Roll Number:</b> ${students[i].rollNo}
                </p>

            </div>

        `;
    }
}



// ===============================
// SEARCH STUDENT
// ===============================

function searchStudent() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();


    let searchResult =
        document.getElementById("searchStudentDetails");


    // Clear previous search results
    searchResult.innerHTML = "";


    // If search box is empty
    if (searchValue === "") {

        searchResult.innerHTML = `
            <p class="empty">
                Search for a student above.
            </p>
        `;

        return;
    }


    let found = false;


    // Search through all students
    for (let i = 0; i < students.length; i++) {

        let student = students[i];


        let name =
            student.name.toLowerCase();

        let branch =
            student.branch.toLowerCase();

        let rollNo =
            student.rollNo.toString().toLowerCase();


        // Search name, branch or roll number
        if (
            name.includes(searchValue) ||
            branch.includes(searchValue) ||
            rollNo.includes(searchValue)
        ) {

            found = true;


            searchResult.innerHTML += `

                <div class="student-card search-card">

                    <h3>👤 ${student.name}</h3>

                    <p>
                        <b>Age:</b> ${student.age}
                    </p>

                    <p>
                        <b>Branch:</b> ${student.branch}
                    </p>

                    <p>
                        <b>Roll Number:</b> ${student.rollNo}
                    </p>

                </div>

            `;
        }
    }


    // If no student found
    if (found === false) {

        searchResult.innerHTML = `

            <p class="not-found">
                ❌ No student found
            </p>

        `;
    }
}