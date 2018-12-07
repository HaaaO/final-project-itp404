[![Build Status](https://travis-ci.org/itp404-fall-2018/ember-crud.svg?branch=master)](https://travis-ci.org/itp404-fall-2018/ember-crud)

1) I have five routes contact, create, edit, index and post
2) I implemented the function to create/edit/read/delete a diary from our website by using GET/POST/PUT/PATCH AJAX call
3) Successfully handled loading(spinner) and error
4) When you delete the post, you can see the button changes to deleting... and then disappear
5) Used both my check-empty component and Bootstrap to implement form validation
6) Created CheckEmpty component to notify user no to leave the form blank, and when user has already inputed text, it will
    count the characters user inputted.
7) Each route has a unique title
8) Used ember-moment to notify the time when a new diary is posted
9) Tested on ---- 1) deleting a post 2) cancelling deleting a post 3) writing a post 4) editting a post 5) viewing a list of post
10) 3 tests on component CheckEmpty: 1) when the text-box is empty, it should output "please say something more" 2) when user inputted something, it should output the characters count 3) when user only inputted spaces, this shouldn't counted as valid input, it should output "please say something more" 2 tests on helper TruncateText:1) the text is truncated to the number of characters passed in 2) the text is not truncated when the length is too short
11) Passed all the linting tests
12) Used Ember-bootstrap to implement UI design
13) surge page: http://zhonghas.surge.sh
14) Showing up passing travis badge on my github repo
