import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  createdAt: DS.attr('date'),
  content: DS.attr(),
  html: DS.attr()
});
