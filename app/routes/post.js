import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Please enjoy this post',
  model(params) {
    return this.store.findRecord('movie-diary', params.id);
  }
});
