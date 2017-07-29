import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
SimpleSchema.extendOptions(['autoform']);
 Books = new Mongo.Collection('books');

Books.attachSchema(new SimpleSchema({
  title: {
    // Labels are used to reffer to this field in validation
    label: 'title',
    // Specifying the allowed type
    type: String
  },
  author: {
    label: 'author',
    type: String
  },
},))

