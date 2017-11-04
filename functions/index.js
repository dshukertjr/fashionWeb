const functions = require('firebase-functions')


// var admin = require("firebase-admin")


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.createPost = functions.firestore
  .document('posts/{postId}')
  .onCreate(event => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    // var newValue = event.data.data()

    // // access a particular field as you would any JS property
    // var name = newValue.name

    // perform desired operations ...
    const createTime = Date.now()

    console.log("timestamp", createTime)

    //merge true is there so that it won't override other values in that reference (probably)
    return event.data.ref.set({
      createTime: createTime
    }, {merge: true})
})