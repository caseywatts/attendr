import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.firstName();
  },
  location() {
    return faker.address.streetAddress();
  },
  time() {
    return faker.date.future();
  }
});
