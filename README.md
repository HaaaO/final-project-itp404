[![Build Status](https://travis-ci.org/itp404-fall-2018/ember-crud.svg?branch=master)](https://travis-ci.org/itp404-fall-2018/ember-crud)

1) At least 4 routes
    I have five routes contact, create, edit, index and post
2) At least 1 GET, 1 POST, 1 PUT or PATCH, and 1 DELETE AJAX request.
    I implemented the function to create/edit/read/delete a diary from our website by using GET/POST/PUT/PATCH AJAX call
3) Use of Ember’s loading and error substates.
    Successfully handled loading(spinner) and error
4) There should be some sort of feedback to the user when forms are processing
    When you delete the post, you can see the button changes to deleting... and then disappear
5) Form validation
    Used both my check-empty component and Bootstrap to implement form validation
6) At least 1 reusable/generic component designed by you that adheres to the Data Down, Actions Up paradigm.
    Created CheckEmpty component to notify user no to leave the form blank, and when user has already inputed text, it will
    count the characters user inputted.
7) Each page has a unique title using ember-cli-document-title
    Each route has a unique title
8) Use of at least 1 addon of your choice that isn’t one of the ones listed in these requirements
    Used ember-moment to notify the time when a new diary is posted
9) At least 5 application tests that cover all types of CRUD operations
    Tested on 1) deleting a post 2) cancelling deleting a post 3) writing a post 4) editting a post 5) viewing a list of post
10) At least 5 rendering tests. These should be a mixture of tests for helpers and components.
    3 tests on component CheckEmpty:
                1) when the text-box is empty, it should output "please say something more"
                2) when user inputted something, it should output the characters count
                3) when user only inputted spaces, this shouldn't counted as valid input, it should output "please say something more"
    2 tests on helper TruncateText:
                1) the text is truncated to the number of characters passed in
                2) the text is not truncated when the length is too short
11) Cleanly formatted code.
    Passed all the linting tests
12) Your project should be styled so that it presents a good user experience and looks organized and professional.
    Used Ember-bootstrap to implement UI design
13) Deployed to Surge.sh with ember-cli-surge
    surge page: http://zhonghas.surge.sh
14) Travis CI integration with all tests passing and a status badge on your project’s README
    Showing up passing travis badge on my github repo
