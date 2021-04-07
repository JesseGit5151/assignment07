// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let selectedtable = document.getElementById('employees')
let empCount = document.querySelector('#empCount')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = ''

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value
    let name = document.querySelector('#name').value
    let extension = document.querySelector('#extension').value
    let email = document.querySelector('#email').value
    let department = document.querySelector('#department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellNname = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    let del = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.innerHTML = id
    cellNname.innerHTML = name
    cellExt.innerHTML = extension
    cellEmail.innerHTML = email
    cellDepartment.innerHTML = department
    // CREATE THE DELETE BUTTON

    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = 'X'
    deleteBtn.className = 'btn btn-danger float-right btn-sm delete'
    del.appendChild(deleteBtn)
    row.appendChild(del)
    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    empCount.innerHTML = `(${count})`
});

// DELETE EMPLOYEE
selectedtable.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        let askUser = confirm('Are you sure you want to delete this user?')
        if (askUser) {
            selectedtable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            count--
            empCount.innerHTML = `(${count})`
        }
    }
});