/* globals server */
import { test } from 'qunit';
import moduleForAcceptance from 'attendr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users');

test('visiting /users', function(assert) {
  server.createList('user', 3);
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
    assert.equal(find('.user').length, 3);
  });
});
