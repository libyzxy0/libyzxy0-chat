const db = require('../database/db');
const jwt = require('../handler/JWT');
async function login(req, res) {
  const { username, password } = req.body;
  console.log(req.body)
  try {
    let users = await db.readUsers();
    let user = users.find((user) => user.username === username || user.email === username);
    if(user) {
      if(user.password === password) {
        console.log(user)
        let token = jwt.generateToken({
          username: user.username, 
          userID: user.userID, 
          firstName: user.firstName, 
          lastName: user.lastName, 
          password: user.password, 
          accountConfirmed: user.accountConfirmed, 
          email: user.email, 
          status: user.status,
          bio: user.bio
        }, '3d');
        res.send({ code: 200, message: "loggedin", token })
      } else {
        res.send({ code: 401, message: "wrong password", token: null })
      }
    } else {
      res.send({ code: 404, message: "not found", token: null })
    }
  } catch (err) {
    res.send({ code: 500, error: err.message, token: null })
  }
}
async function signup(req, res) {
  let { username, firstName, lastName, email, password } = req.body;
  try {
    let usr = await db.createUser({
      username, 
      userID: Math.floor(100000000000000 + Math.random() * 900000000000000).toString(), 
      firstName, 
      lastName, 
      email, 
      password, 
      accountConfirmed: true, 
      status: 'offline', 
      bio: ''
    });
    if(usr) {
      res.send({ code: 200, message: "Account created" })
    } else {
      res.send({ code: 400, message: "Failed to create account" })
    }
  } catch (err) {
    console.log(err)
    res.send({ code: 400, message: "Failed to create account" })
  }
}
async function verify(req, res) {
  let token = req.body.token;
  let data = jwt.verifyToken(token)
  if(!!data) {
    res.send({ code: 200, data })
  } else {
    res.send({ code: 401, data: null })
  }
}

module.exports = {
  login, 
  signup, 
  verify
};