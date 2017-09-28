const assert = require('assert');
const User   = require('../src/users');


describe('Reading users out of the database',() => {
  let joe ;

  beforeEach((done) => {
    joe = new User({name :'Joe'});
    joe.save()
       .then(()=> done());
  });

  it('Find all the users with a name of Joe',(done) => {
    User.find({name:"Joe"}).then((users) => {
      // console.log(users);
      // assert(users[0]._id === joe._id);   will give an error true === false
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    })
  });

});
