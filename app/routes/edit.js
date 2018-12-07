import Route from '@ember/routing/route';

export default Route.extend({
  title: 'edit diary - movie diary',
  model(params) {
    return this.store.findRecord('movie-diary', params.id);
  }
});
