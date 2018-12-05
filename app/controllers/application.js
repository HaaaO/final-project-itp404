import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  collapsed: true,
  actions: {
    toggle() {
      this.set('collapsed', !this.collapsed);
    }
  }
})
