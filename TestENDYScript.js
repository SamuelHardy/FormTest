/**
 * Created by Admin on 18.08.2017.
 */
function checkParams() {
    var fio = $('#fio').val();
    var email = $('#email').val();
    var tel = $('#tel').val();

    if(fio.length !== 0 && email.length !== 0 && tel.length !== 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

var email = document.getElementById('email');
email.addEventListener('blur', function(e){
    e.target.value = e.target.value + '@gmail.com';
});


function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className = "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;

    resetError(elems.fio.parentNode);
    if (!elems.fio.value) {
        showError(elems.fio.parentNode, ' Укажите свои ФИО');
    }

    resetError(elems.tel.parentNode);
    if (!elems.tel.value) {
        showError(elems.tel.parentNode, ' Укажите телефон');
    }

    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, ' Укажите e-mail по примеру: "вашЕ-mail@gmail.com"');
    }
}