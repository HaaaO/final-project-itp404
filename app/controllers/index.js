import Controller from '@ember/controller';
import window from 'ember-window-mock';
import RSVP from 'rsvp';
import { later } from '@ember/runloop'

export default Controller.extend({
  actions: {
    updateDatabase(){
        return new RSVP.Promise((resolve) =>{
          later(()=> {
            resolve();
          },2000);
      });
    },
    deletePost(post) {
      let confirmed = window.confirm(
        'Are you sure you want to delete this diary?'
      );
      if (confirmed) {
        post.destroyRecord();
      }
    }

  }
});
