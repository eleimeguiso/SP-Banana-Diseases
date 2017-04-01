/* 
	Collections are Meteor's way of storing persistent data
 */

import { Mongo } from 'meteor/mongo';

export const Diseases = new Mongo.Collection('diseases');
