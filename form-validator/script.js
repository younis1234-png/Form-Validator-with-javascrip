const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// // 1 thing we gonna do form is add an event listener when we submit it
// form.addEventListener("submit", function (e) {
//   console.log("submit");
//   e.preventDefault();

//   // insted of having a if statement  we gonna have seperate function
//   // so insted of passin one value we can pass in an array of values that required
//   checkRequired([username, email, password, password2]);

//   // max and min enter for our username and password
//   checkLength([username, 5, 15]);
//   checkLength([password, 8, 25]);
// });

// 2 we gonna create our showseccus and showerror

function showError(input, message) {
  // we want to get the form-control dive of the input which is the parentElement
  const formControl = input.parentElement;
  formControl.className = "form-container error";
  //show our actual message instede of error message
  const small = formControl.querySelector("small");

  small.innerText = message; // username required in our add event listener message
}

// our success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-container success";
}

//3 check if email is valid from STACKOVERFLOW
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// check required for all of our fileds and called them inputArr
function checkRequired(inputArr) {
  // loop through the array and check all of them AND DO WHAT VERY WE WANT IN THE LOOP
  // USING foreach, there 5 MOST COMMON HIGH ORDER ARRAY

  // (item) in ou function represent each input
  inputArr.forEach(function (item) {
    // console.log(item.value); loop throught and out put the value
    if (item.value.trim() === "") {
      //show our erro by the id
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

// to capitalize and get the id for each item

function getFieldName(item) {
  //return the input id and uppcase the first letter

  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

//check length for password and username

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// matching password
function checkPasswordsMatch(item1, item2) {
  if (item1.value !== item2.value) {
    showError(item2, "Passwords do not match");
  }
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!checkRequired([username, email, password, password2])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }
});
