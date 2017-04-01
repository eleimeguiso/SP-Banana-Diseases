import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating'; // required
import { ReactiveDict } from 'meteor/reactive-dict';
 
import { Diseases } from '../api/diseases.js'; // required by mongo

import './disease.js';
import './body.html'; // get the html part
 
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  diseases() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Diseases.find({ checked: { $ne: true } }, {sort: {createdAt: -1 } });
    }
    // Otherwise, return all of the tasks
    return Diseases.find({}, {sort: {createdAt: -1 } });
  },
  incompleteCount() {
    return Diseases.find({ checked: { $ne: true } }).count();
  },
});


Template.body.events({
  'submit .add-disease'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.name.value;
    const description = target.description.value;


    // Insert a task into the collection
    Diseases.insert({
      name,
      description,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    console.log(event.target.name.value);
    // Clear form
    target.name.value = '';
    target.description.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});