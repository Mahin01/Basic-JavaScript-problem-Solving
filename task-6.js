function generateRandomPassword(length) {
    const charsetPattern = /^[A-Za-z0-9!@#$%^&*()-_=+\[\]{}|;:'",.<>?]+$/;
    let password = '';
  
    while (password.length < length) {
      const randomByte = crypto.randomBytes(1);
      const char = randomByte.toString('utf8');
  
      if (charsetPattern.test(char)) {
        password += char;
      }
    }
  
    return password;
  }