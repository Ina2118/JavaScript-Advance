function validateForm() {
    let companyCheckbox = document.getElementById('company');
    let submitButton = document.getElementById('submit');
    let validationMessage = document.getElementById('valid');
    let companyDetails = document.getElementById('companyInfo');

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let companyNumber = document.getElementById('companyNumber');

    function isLengthValid(value, min, max) {
        return value.length >= min && value.length <= max;
    }

    function isPasswordValid(value, min, max, matchValue) {
        return isLengthValid(value, min, max) && /^[a-zA-Z0-9]+$/.test(value) && value === matchValue;
    }

    function validateFields() {
        let isCompany = companyCheckbox.checked;
        let isValid = true;

        if (!isLengthValid(username.value, 3, 20) || !/^[a-zA-Z0-9]+$/.test(username.value)) {
            username.style.border = '2px solid red';
            isValid = false;
        } else {
            username.style.border = '';
        }

        if (!isPasswordValid(password.value, 5, 15, confirmPassword.value)) {
            password.style.border = '2px solid red';
            confirmPassword.style.border = '2px solid red';
            isValid = false;
        } else {
            password.style.border = '';
            confirmPassword.style.border = '';
        }

        if (!/^.*@.*\..*$/.test(email.value)) {
            email.style.border = '2px solid red';
            isValid = false;
        } else {
            email.style.border = '';
        }

        if (isCompany && (companyNumber.value < 1000 || companyNumber.value > 9999)) {
            companyNumber.style.border = '2px solid red';
            isValid = false;
        } else {
            companyNumber.style.border = '';
        }

        validationMessage.style.display = isValid ? 'block' : 'none';
    }

    companyCheckbox.addEventListener('change', function () {
        companyDetails.style.display = companyCheckbox.checked ? 'block' : 'none';
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        validateFields();
    });
}
