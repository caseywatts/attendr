import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  time() {
    return faker.date.future();
  },
  state() {
    let stateOptions = ['present', 'absent'];
    return stateOptions[Math.floor(Math.random() * stateOptions.length)];
  }
});
