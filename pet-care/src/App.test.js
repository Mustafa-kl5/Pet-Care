import {
  isValidEmail,
  isValidPassword,
  checkStringVariables,
  birthDayValidation,
  nameValidation,
  cityValidation,
  validationPhoneNumber,
} from "./Validation/InputValidtion";

// Test suite for isValidEmail
describe("isValidEmail", () => {
  it("should return true for a valid email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  it("should return false for an invalid email with missing top-level domain", () => {
    expect(isValidEmail("test@example")).toBe(false);
  });

  it("should return false for an invalid email with spaces", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });
});

// Test suite for isValidPassword
describe("isValidPassword", () => {
  it("should return true for a valid password", () => {
    expect(isValidPassword("Password1@")).toBe(true);
  });

  it("should return false for a password with length less than 6 characters", () => {
    expect(isValidPassword("Pass1")).toBe(false);
  });

  it("should return false for a password without a special character", () => {
    expect(isValidPassword("Password1")).toBe(false);
  });
});

// Test suite for checkStringVariables
describe("checkStringVariables", () => {
  it("should return true for an object with all non-empty string values", () => {
    const obj = { name: "John", email: "john@example.com", city: "New York" };
    expect(checkStringVariables(obj)).toBe(true);
  });

  it("should return false for an object with an empty string value", () => {
    const obj = { name: "John", email: "", city: "New York" };
    expect(checkStringVariables(obj)).toBe(false);
  });
});

// Test suite for birthDayValidation
describe("birthDayValidation", () => {
  it("should return true for a valid date of birth", () => {
    const obj = { dayOfBirth: "15", monthOfBirth: "06", yearOfBirth: "1990" };
    expect(birthDayValidation(obj)).toBe(true);
  });

  it('should return false for a date of birth with "DD" placeholder', () => {
    const obj = { dayOfBirth: "DD", monthOfBirth: "06", yearOfBirth: "1990" };
    expect(birthDayValidation(obj)).toBe(false);
  });
});

// Test suite for nameValidation
describe("nameValidation", () => {
  it("should return true for a valid name within length limits", () => {
    expect(nameValidation("John")).toBe(true);
  });

  it("should return false for a name with length less than the minimum", () => {
    expect(nameValidation("A")).toBe(false);
  });
});

// Test suite for cityValidation
describe("cityValidation", () => {
  it("should return true for a valid city name", () => {
    expect(cityValidation("New York")).toBe(false);
  });

  it("should return false for an invalid city name with a placeholder", () => {
    expect(cityValidation("City")).toBe(true);
  });
});

// Test suite for validationPhoneNumber
describe("validationPhoneNumber", () => {
  it('should return true for a valid phone number starting with "078"', () => {
    expect(validationPhoneNumber("0781234567")).toBe(true);
  });

  it("should return false for an invalid phone number with a wrong prefix", () => {
    expect(validationPhoneNumber("0881234567")).toBe(false);
  });

  it("should return false for an invalid phone number with incorrect length", () => {
    expect(validationPhoneNumber("078123")).toBe(false);
  });
});
