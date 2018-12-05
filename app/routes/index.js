import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Our Favorite posts!',
  model() {
    return this.store.findAll('movie-diary');
  }
});
