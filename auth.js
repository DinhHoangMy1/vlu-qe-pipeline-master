// Updated login logic on feature branch
function login(username, password) {
  return username === 'admin' && password === '9999';
}

module.exports = { login };
