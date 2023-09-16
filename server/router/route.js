const express = require('express');
let jwt = require('../handler/JWT');
let db = require('../database/db');
const router = express.Router();
const {
  login,
  signup,
  verify
} = require('../controllers/handleAuth');


router.route('/auth/login').post(login)
router.route('/auth/signup').post(signup)
router.route('/auth/verify').post(verify)
router.route('/api/fetch-user-basic-info').post( async(req, res) => {
  let { username } = req.body;
  try {
    let data = await db.readUsers();
    let user = data.find((user) => user.username === username);
    if(user) {
      res.send({
      username: user.username,
      userID: user.userID, 
      firstName: user.firstName, 
      lastName: user.lastName
    })
    } else {
      res.send({ error: "not found" })
    }
  } catch (err) {
    console.log(err)
    res.send({ error: err })
  }
})
router.route('/api/retrieve-message').post(async (req, res) => {
  let { token, userID } = req.body;
  let messages = await db.readMessages();
  let user = jwt.verifyToken(token);
  let cuserID = user.userID;

  // Filter messages based on sender
  const filteredMessages = messages.filter((message) =>
    [cuserID, userID].includes(message.sender.userID)
  );

  // Sort filteredMessages by timestamp in descending order
  filteredMessages.sort((a, b) => b.timestamp - a.timestamp);

  res.json(filteredMessages);
});
router.route('/api/get-users').post( async(req, res) => {
  let token = req.body.token;
  console.log(token)
  let users = await db.readUsers();
  let data = jwt.verifyToken(token);
  let dataUsers = [];
  if(data) {
    for(let i = 0;i < users.length;i++) {
      if(users[i].userID != data.userID) {
        dataUsers.push({
          username: users[i].username,
          userID: users[i].userID,
          firstName: users[i].firstName,
          lastName: users[i].lastName,
          email: users[i].email,
          status: users[i].status,
          bio: users[i].bio
        })
      }
    }
    res.send({
      code: 200, 
      users: dataUsers
    })
  } else {
    res.send({ 
      code: 400,
      users: []
    })
  }
}) 

module.exports = router;