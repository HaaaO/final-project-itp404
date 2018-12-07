import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // tagName: 'span',
  classNameBindings: ['isEmpty:empty'],

  isEmpty: computed('text', function() {
    let textLength = this.text.trim() ? this.text.trim().length : 0; // ternary statement
    return textLength == 0;
  }),

  isEmptyMore: computed('text', function() {
    let textLength = this.text.trim() ? this.text.trim().length : 0; // ternary statement
    if (textLength > 0){
      return textLength + "  has been filled in";
    }
    else{
      return "please say something more";
    }

  }),
});
