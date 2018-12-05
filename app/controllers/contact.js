import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    sendMail(params) {
      const body = params.comments;
      window.open(`mailto:zhonghas@usc.edu?subject=Your+App&body=${body}`);
    }

  }
});
