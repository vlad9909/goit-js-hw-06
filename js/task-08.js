const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log({ email: email.value, password: password.value }); //виводимо об'єкт в консоль
    form.reset();
  }
});

// const formRef = document.querySelector(".login-form");
// // console.log(formRef);

// formRef.addEventListener("submit", (event) => {
//   //   console.log(event);
//   event.preventDefault();
//   if (event.target.email.value === "" || event.target.password.value === "") {
//     alert("Всі поля мають бути заповнені!!!");
//   } else {
//     const formData = {
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };
//     console.log(FormData);
//     // formRef.reset();
//   }
// });
