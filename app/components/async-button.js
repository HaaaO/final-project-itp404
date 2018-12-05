import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  buttonText: 'Delete',
  click(){
    this.set('buttonText', 'Deleting...');
  }
});
