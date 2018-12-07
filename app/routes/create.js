import Route from '@ember/routing/route';

export default Route.extend({
  title: 'new Diary- movie diary',
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('title', '');
    controller.set('body', '');
  }
});
