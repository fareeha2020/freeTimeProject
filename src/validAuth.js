export default function validateAuth(name, value) {
    let errors = {};
    // Email Errors
  
    if (name === "email") {
      if (!value) {
        return "Required email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Invalid email address";
      }
    }
    if (name === "password") {
      if (!value) {
        return "Required Password";
      } else if (value.length < 6) {
        return "Password must be at least 6 characters";
      }
    }
  }
  