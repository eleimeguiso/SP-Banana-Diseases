import { Meteor } from 'meteor/meteor';

// this creates the MongoDB collection and sets up the plumbing to get the data to the client
import '../imports/api/diseases.js';

Meteor.startup(() => {
  // code to run on server at startup
});