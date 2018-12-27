## Objective
* Create a full stack application Picsta using Rails and Heroku to store image links and display them on client view.
  - #### [Picsta](https://peterchang2.github.io/picsta-full-stack-front-end-client/)
  - #### [Front-end repo](https://github.com/peterchang2/picsta-full-stack-front-end-client).
  - #### [Back-end repo](https://github.com/peterchang2/picsta-full-stack-back-end-api)
  - #### [Heroku](https://picstafame.herokuapp.com/images)

## Description
This is a simple image upload application by storing the direct image link in the database and appending the url with a image tag to the view. A user can access and delete his/her own images and not other people's. The long term goal is to link my database with AWS so user can upload an actual image file.

## Technologies Used
* HTML
* SASS
* Javascript
* JQuery
* Ruby
* Ruby on Rails
* Handlebars
* PostgreSQL
* Heroku
* AJAX
* Bootstrap

## Thought Process & Steps
* Setup proper repos and deploy both front-end(GitHub) and back-end(Heroku).
* Built user authentication on the back end and tested with curl-scripts.
* Built user auth front end and tested in localhost browser.
* Scaffolded the proper table and columns, and declare proper relationships between user and resources.
* Used curl-scripts to create/update/delete resources.
* Built front-end controls to create/update/delete resources.
* Styling

## User Stories & Wireframe
* User will be able to sign-up, sign-in, change-password, and sign-out.
* User can create and object with the proper date, caption, and direct image link.
* User can retrieve all uploaded images associated with the account.

## Wireframe
![Wireframe](https://i.imgur.com/QjahI1D.jpg?1)

## Future Implementations

* gifv/webm/mp4 Implementations.
* More resources linked to the user.
* Linking with AWS so user can upload actual images or gif files.
* Better CSS.
