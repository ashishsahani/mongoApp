const mongoose    = require('mongoose'),
      Schema      = mongoose.Schema;


// creating a schema for users
const UserSchema  = new Schema ({
  name  : {
    type : String ,
    required : [true, 'Name is required.'] 
  } ,
  postCount : Number
});


const User = mongoose.model('user',UserSchema);

module.exports = User ;
