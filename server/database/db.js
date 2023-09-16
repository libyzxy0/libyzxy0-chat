const { User, Message } = require('./models');

//User Crud Operations
async function createUser(inputData) {
  return new Promise((resolve, reject) => {
    const data = new User(inputData);
    data.save()
      .then((r) => {
        resolve(r);
      })
      .catch((error) => {
        reject(error);
      });
  })
}
async function readUsers() {
  return new Promise((resolve, reject) => {
    User.find()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}
async function updateUser(dataID, newData) {
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(dataID, newData, { new: true })
      .then((result) => {
        if (!result) {
          throw new Error('Data not found');
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}
async function deleteUser(dataID) {
  return new Promise((resolve, reject) => {
    User.findByIdAndDelete(dataID)
      .then((result) => {
        if (!result) {
          throw new Error('Data not found');
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}

//Messag3 Crud Operations
async function createMessage(inputData) {
  return new Promise((resolve, reject) => {
    const data = new Message(inputData);
    data.save()
      .then((r) => {
        resolve(r);
      })
      .catch((error) => {
        reject(error);
      });
  })
}

async function readMessages() {
  return new Promise((resolve, reject) => {
    Message.find()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}
async function updateMessage(dataID, newData) {
  return new Promise((resolve, reject) => {
    Message.findByIdAndUpdate(dataID, newData, { new: true })
      .then((result) => {
        if (!result) {
          throw new Error('Data not found');
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}
async function deleteMessage(dataID) {
  return new Promise((resolve, reject) => {
    Message.findByIdAndDelete(dataID)
      .then((result) => {
        if (!result) {
          throw new Error('Data not found');
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })
}

module.exports = {
  createUser, 
  readUsers, 
  updateUser, 
  deleteUser, 
  createMessage, 
  readMessages, 
  updateMessage, 
  deleteMessage
}