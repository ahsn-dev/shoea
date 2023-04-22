import Cookies from "js-cookie";

const validation = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");

  let status = true;
  if (rememberMe.checked) {
    Cookies.set("email", email.value, { expires: 2 });
    Cookies.set("password", password.value, { expires: 2 });
  } else {
    Cookies.remove("password");
    Cookies.remove("email");
  }
  return status;
};

export default validation;
