import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });

  test('deleting a post', async function(assert) {
    server.createList('movie-diary', 1);
    window.confirm = () => true;

    await visit('/');
    await click('[data-test="delete-post"]');
    assert.dom('[data-test="post"]').exists({ count: 0 });
  });

  test('canceling deleting a post', async function(assert) {
    server.createList('movie-diary', 1);
    window.confirm = () => false;

    await visit('/');
    await click('[data-test="delete-post"]');
    assert.dom('[data-test="post"]').exists({ count: 1 });
  });

  test('writing a post', async function(assert) {
    await visit('/movie-diaries/new');
    await fillIn('#title', 'Intro to testing');
    await fillIn('#body', 'I love testing!');
    await click('[data-test="publish"]');

    assert.equal(currentURL(), '/movie-diaries/1');
    assert.dom('[data-test="post-title"]').hasText('Intro to testing');
    assert.dom('[data-test="post-body"]').hasText('I love testing!');
  });

  test('editting a post', async function(assert) {
    server.createList('movie-diary', 10);
    await visit('/movie-diaries/1/edit');
    await fillIn('#title', 'Intro to testing');

    await click('[data-test="publish"]');

    assert.equal(currentURL(), '/movie-diaries/1');
    assert.dom('[data-test="post-title"]').hasText('Intro to testing');

  });

  test('visiting / displays a list of posts', async function(assert) {
    server.createList('movie-diary', 10);

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="post"]').exists({ count: 10 });
  });

  test('viewing the details of a post', async function(assert) {
    server.create('movie-diary', {
      title: 'Post 1',
      body: 'My post body'
    });

    await visit('/movie-diaries/1');

    assert.dom('[data-test="post-title"]').hasText('Post 1');
    assert.dom('[data-test="post-body"]').hasText('My post body');
  });
});
