const db = require('../config/Firebase');

const addUser = async (data) => {
    const docRef = db.collection('User').doc();
    await docRef.set(data);
    return docRef.id;
};

module.exports = {
    addUser
};