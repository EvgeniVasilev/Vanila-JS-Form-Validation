function validateForm() {
    var e_mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        is_string = /^[A-z-Z-a \-\.\?!_]+$/;
    var para = document.getElementsByTagName('p'),
        email = document.getElementById('email'),
        password = document.getElementById('password'),
        colour = document.getElementById('colour'),
        checkboxes = document.getElementsByName('animal'),
        checkState = false,
        checkboxesContainer = [],
        checkboxesValue = null,
        isTiger = false,
        typeOfTiger = document.getElementById('tiger_type');

    // validates e-mail
    if (!email.value.match(e_mailValid)) {
        para[0].className = 'error';
        alert('Please, fill in valid e-mail');
        return false;
    }

    // validates password
    if (password.value.length < 8) {
        para[1].className = 'error';
        alert('Please, fill in password consists of at least 8 characters!');
        return false;
    }

    // validates select colour
    if (colour.value == '') {
        para[2].className = 'error';
        alert('Please, select colour!');
        return false;
    }

    // validates checkboxes
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesContainer.push(checkboxes[i]);
            checkboxesValue = checkboxes[i].value;
            checkState = true;
            if (checkboxesValue === 'tiger') {
                isTiger = true;
            }
        }
    }

    if (checkState && checkboxesContainer.length >= 2) {
    } else {
        para[3].className = 'error';
        alert('Please, choose at least two animals!');
        return false;
    }

    // validates type of tiger
    if (isTiger && !typeOfTiger.value.match(is_string)) {
        para[4].className = 'error';
        alert('Please, describe in few words your tiger!');
        return false;
    }
}