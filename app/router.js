import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', { path: '/movie-diaries/:id' });
  this.route('create', { path: '/movie-diaries/new' });
  this.route('edit', { path: '/movie-diaries/:id/edit' });
});

export default Router;
