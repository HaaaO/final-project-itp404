import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | check-empty', function(hooks) {
  setupRenderingTest(hooks);

  test('when user input 123', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('body','123')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CheckEmpty @text={{body}}/>`);


    assert.equal(this.element.textContent.trim(), '3  has been filled in');

    // Template block usage:

  });

  test('when user input 123', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('body','   ')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CheckEmpty @text={{body}}/>`);


    assert.equal(this.element.textContent.trim(), 'please say something more');

    // Template block usage:

  });


  test('when the user input nothing', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('body','')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CheckEmpty @text={{body}}/>`);


    assert.equal(this.element.textContent.trim(), 'please say something more');

    // Template block usage:

  });


});
