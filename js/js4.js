let popit = 5;
let number_card = document.querySelector('input#number_card');
let firstname = document.querySelector('input#firstname');
let secondname = document.querySelector('input#secondname');
let name_org = document.querySelector('input#name_org');
let phone_number = document.querySelector('input#phone_number');
let email = document.querySelector('input#email');

firstname.addEventListener('change', function () {
    let regex = new RegExp('[0-9]+')
    let error_firstname = document.querySelector('#error_firstname');

    if (regex.exec(firstname.value) !== null) {
        firstname.classList.add('is-invalid');
        error_firstname.style.display = 'block';
        error_firstname.innerHTML = "Имя может содержать только буквы";
    } else {
        firstname.classList.remove('is-invalid');
        error_firstname.style.display = 'none';
    }
});

secondname.addEventListener('change', function () {
    let regex = new RegExp('[0-9]+')
    let error_secondname = document.querySelector('#error_secondname');

    if (regex.exec(secondname.value) !== null) {
        secondname.classList.add('is-invalid');
        error_secondname.style.display = 'block';
        error_secondname.innerHTML = "Фамилия может содержать только буквы";
    } else {
        secondname.classList.remove('is-invalid');
        error_secondname.style.display = 'none';
    }
});

phone_number.addEventListener('change', function () {
    const regex = /\+380[0-9]{9}$/;
    let error_phone_number = document.querySelector('#error_phone_number');
    if (regex.exec(phone_number.value) === null) {
        phone_number.classList.add('is-invalid');
        error_phone_number.style.display = 'block';
        error_phone_number.innerHTML = "Не верный формат номера";
    } else {
        phone_number.classList.remove('is-invalid');
        error_phone_number.style.display = 'none';
    }
});


email.addEventListener('change', function () {
    const regex = /^.+@.+$/;
    let error_email = document.querySelector('#error_email');
    if (regex.exec(email.value) === null) {
        email.classList.add('is-invalid');
        error_email.style.display = 'block';
        error_email.innerHTML = "Не верный формат електроной почты";
    } else {
        email.classList.remove('is-invalid');
        error_email.style.display = 'none';
    }
});


function checkForm() {
    if (number_card.value === "" || firstname.value === "" || secondname.value === "" || name_org.value === "" || phone_number.value === "" || email.value === "") {
        let all_error = document.querySelector('#all_error');
        all_error.style.display = 'block';
        all_error.innerHTML = "Введенны не все данные.";
        return;
    } else {
        let all_error = document.querySelector('#all_error');
        all_error.style.display = 'none';
    }

    let match_first_name = new RegExp('\D*');
    let regex = new RegExp('[0-9]{16}')
    let match_card = regex.exec(number_card.value);

    if (popit === 0) return;
    if (match_card === null) {
        popit--;
        number_card.classList.add('is-invalid');
        let error_card = document.querySelector('#invalidCheck_card');
        error_card.style.display = 'block';
        error_card.innerHTML = 'Номер карты введен не правильно. У вас осталось ' + popit + ' попыток.';
    } else {
        number_card.classList.remove('is-invalid');
        let error_card = document.querySelector('#invalidCheck_card');
        error_card.style.display = 'none';
    }
}

function checkText() {
    let text_reg = document.querySelector('#text_reg');
    let find_reg = document.querySelector('#find_reg');
    let regex = /a\Db/g;
    let match;
    if (regex.exec(text_reg.value) == null) {
        let error_reg = document.querySelector('#error_reg');
        error_reg.style.display = 'block';
        error_reg.innerHTML = "Не найдено ни одного совпадения."
        return;
    }
    while ((match = regex.exec(text_reg.value)) !== null) {
        if (match.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        match.forEach((find, groupIndex) => {
            let li_el = document.createElement('li');
            li_el.innerHTML = find;
            li_el.classList.add('list-group-item');
            find_reg.appendChild(li_el);
        });
    }
}