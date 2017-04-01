import { Template } from 'meteor/templating';

import { Diseases } from '../api/diseases.js';

import './disease.html';

Template.disease.events({
	// 'click .toggle-checked'() {
	// 	// Set the checked property to the opposite of its current value
	// 	Diseases.update(this._id, {
	// 		$set: { checked: ! this.checked },
	// 	});
	// },
	'click .delete'() {
		Diseases.remove(this._id);
	},
});