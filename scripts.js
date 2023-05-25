function showInfo() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    if (firstName !== '') {
        alert(firstName + ' ' + lastName);
    }
}