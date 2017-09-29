const assert = require('assert');
const User   = require('../src/users');

describe('Validation records', (done) => {
  it('requires a user name', (done) => {
    const user = new User({ name : undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name ;

    assert(message === 'Name is required.')
    done();
  })
});
