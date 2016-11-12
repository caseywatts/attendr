export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  // server.loadFixtures();
  let users = server.createList('user', 3);
  let events = server.createList('event', 3);
  users.forEach((user) => {
    server.create('attendance-entry', {
      'event': events[0],
      user
    });
  });
}
