//input variable
let userName = document.getElementById("user-name")
let cardNumber = document.getElementById("card-number");
let date = document.getElementById("date");
let year = document.getElementById("year");
let cvc = document.getElementById("cvc");
//errors variable
let userNameError = document.getElementById("user-name-error");
let cardNumberError = document.getElementById("card-number-error");
let dateAndYearError = document.getElementById("date-and-year-error");
let cvcError = document.getElementById("cvc-error");
//showing variable
let showName = document.getElementById("show-name");
let showCardNumber = document.getElementById("show-card-number");
let showDateAndYear = document.getElementById("show-date-and-year");
let showCvc = document.getElementById("show-cvc");

//pages
let formPage = document.getElementById("form")
let completionPage = document.getElementById("completion-page")
//btn
let confirm = document.getElementById("confirm");
let continueBtn = document.getElementById("continue")

confirm.addEventListener("click", (e) => {
    e.preventDefault()
    //error checking
    let hasError = 1
    const cardNumberValue = cardNumber.value.replace(/\s/g, '');
    function showError(inputElement, errorElement, errorMessage) {
        errorElement.innerHTML = errorMessage;
        errorElement.classList.add('error');
        inputElement.style.borderColor = "hsl(0, 100%, 66%)";
    }

    if (userName.value === '') {
        showError(userName, userNameError, "Can't be blank");
        hasError = 0
    }

    if (cardNumber.value === '') {
        showError(cardNumber, cardNumberError, "Can't be blank");
        hasError = 0
    }
    else if (isNaN(cardNumberValue.replace(/\D/g, ''))) {
        showError(cardNumber, cardNumberError, "Wrong format, numbers only");
        hasError = 0
    }

    if (date.value === '') {
        dateAndYearError.style.visibility = "visible";
        showError(date, dateAndYearError, "Can't be blank")
        hasError = 0
    }
    if (year.value === '') {
        dateAndYearError.style.visibility = "visible";
        showError(year, dateAndYearError, "Can't be blank")
        hasError = 0
    }
    if (cvc.value === '') {
        cvcError.style.visibility = "visible";
        showError(cvc, cvcError, "Can't be blank")
        hasError = 0
    }

    //writing on card
    if (hasError) {
        showCardNumber.innerHTML = cardNumber.value
        showName.innerHTML = userName.value
        showDateAndYear.innerHTML = date.value + "/" + year.value
        showCvc.innerHTML = cvc.value
        form.style.display = "none"
        completionPage.style.display = "flex"
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('click', () => {
    input.focus();
  });

  input.addEventListener('touchstart', () => {
    input.focus();
  });
});

