export function Validation(UserInputs) {
  var ErrorMessage = "";
  var passwordformat = new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&?*])[a-zA-Z0-9!@#$%^&?*]{7,15}$/
  );
  var Password = UserInputs.password;
  var passwordvalidation = passwordformat.test(Password);
  var output;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mailvalidation = mailformat.test(UserInputs.email);
  var CheckInput = true;
  if (UserInputs.firstName.length > 15 && UserInputs.firstName.length < 5) {
    CheckInput = false;
    ErrorMessage = "FirstName should between 5-15 keys";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (
    UserInputs.lastName.length > 15 &&
    UserInputs.lastName.length < 5
  ) {
    CheckInput = false;
    ErrorMessage = "LastName should be between  5-15 keys";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (mailvalidation === false) {
    CheckInput = false;
    ErrorMessage =
      "Email should contain Upper-lower-Case ,Digits, and Characters like @ ";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (
    !isNaN(UserInputs.phoneNumber) === false &&
    UserInputs.phoneNumber > 10 &&
    UserInputs.phoneNumber <= 15
  ) {
    CheckInput = false;
    ErrorMessage =
      "PhoneNumber should not contain Characters,Please enter a number should be between 10-15 keys Max";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (passwordvalidation === false) {
    CheckInput = false;
    ErrorMessage =
      "Passwords Should be between 7 to 15 characters which contain at least one numeric digit and a special character!";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (UserInputs.retypePassword !== Password) {
    CheckInput = false;
    ErrorMessage = "Doesnt match the Password";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (UserInputs.city.length < 1) {
    CheckInput = false;
    ErrorMessage = "Please Enter Your City";
    output = [CheckInput, ErrorMessage];
    return output;
  } else if (UserInputs.address.length < 1) {
    CheckInput = false;
    ErrorMessage = "Please Enter Your address";
    output = [CheckInput, ErrorMessage];
    return output;
  } else {
    output = [CheckInput, ""];
    return output;
  }
}
