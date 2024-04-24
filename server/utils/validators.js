module.exports.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Matches a phone number in the format of ###-###-#### or (###)###-#### or ### ### ####
module.exports.phoneNumberRegex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;
