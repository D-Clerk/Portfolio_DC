const { scrypt: _scrypt } = require("crypto");
const { promisify } = require("util");
const scrypt = promisify(_scrypt);

async function verifyPassword(storedPassword, inputPassword) {
  // Todo: Extract the salt from the storedPassword
  const [salt, storedHash] = storedPassword.split(".");
  // Todo: Hash the inputPassword using the extracted salt
  const hashedPassword = await scrypt(inputPassword, salt, 64);

  // Compare the resulting hash with the storedHash
  const inputHash = hashedPassword.toString("hex");
  return inputHash === storedHash;
}


// Do not make changes to the below code.
if(typeof module != 'undefined') {
  module.exports = { verifyPassword };
}
