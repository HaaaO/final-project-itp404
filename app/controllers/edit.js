import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost(post, event) {
      event.preventDefault();

      let diary = this.model;
      diary.save().then(() => {
        this.transitionToRoute('post', diary.id);
      });
    }
  }
});
