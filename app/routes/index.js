import Route from '@ember/routing/route';

export default Route.extend({
  title: 'diaries - movie diary',
  model() {
    return this.store.findAll('movie-diary');
  }
});
