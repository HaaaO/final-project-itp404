import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault();

      let diary = this.store.createRecord('movie-diary', {
        title: this.title,
        body: this.body
      });


      diary.save().then(() => {
        // this.transitionToRoute('index');
        this.transitionToRoute('post', diary.id);
      });
    }
  }
});
