import { test } from 'qunit';
import moduleForAcceptance from 'attendr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('visiting /events', function(assert) {
  visit('/events');

  andThen(function() {
    assert.equal(currentURL(), '/events');
    assert.equal(find('.event').length, 3); // from fixtures
  });
});
