/* globals server */
import { test } from 'qunit';
import moduleForAcceptance from 'attendr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('visiting /events', function(assert) {
  server.createList('event', 3);
  visit('/events');

  andThen(function() {
    assert.equal(currentURL(), '/events');
    assert.equal(find('.event').length, 3);
  });
});
