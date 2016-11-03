# Ideabox

![Alt text](./app/assets/images/ideabox.png?raw=true "Ideabox")

## Overview

[Ideabox](http://ideabox9000.herokuapp.com/) is a site where users can save and keep track of their ideas.  It is a single page Rails application that utilizes jQuery and AJAX to render new content without reloading.

[This project](https://github.com/turingschool/curriculum/blob/master/source/projects/revenge_of_idea_box.markdown) was completed as part of the curriculum at the [Turing School of Software & Design](http://turing.io).  

It was built with Ruby on Rails 5.0.0.1.



#### Learning Goals

* Create a Rails application to manage data related to our ideas and serve initial UI templates
* Use JavaScript (with jQuery) to manage client-side interactions and communicate asynchronously with the server
* Get more experience doing DOM manipulations and AJAX event handling on our own, without using client-side frameworks
* Build an entire application with one HTML page or template, without separate pages for each CRUD action

### Live Version

You can find a live version of this application on Heroku at: http://ideabox9000.herokuapp.com/

### Setup

To set up a local copy of this project, perform the following:

  1. Clone the repository: `git clone https://github.com/dtinianow/idea_box`
  2. `cd` into the project's directory
  3. Run `bundle install`
  4. Run `rake db:{create,migrate}` to set up the postgres database
  5. Run the application in the dev environment by running `rails s`
  6. Visit `http://localhost:3000/`

### Features

#### Viewing Ideas

A user can see all previously created ideas.  Each idea has a title, body, and quality.  Ideas are displayed in descending chronological order.

#### Creating Ideas

New ideas can be created by filling out the 'Submit a New Idea' form.  Valid ideas will then appear on the page.  Idea bodies that are longer than 100 characters will be truncated to the nearest word.  New ideas have a default quality of 'swill'.

#### Deleting Ideas

To delete an idea, simply click the delete button in the row of that idea in the table.

#### Editing and Deleting Ideas

To edit an idea, click the text of either the idea body or title that you want to edit, and type in your changes.  Changes are saved by clicking outside the table box or hitting 'enter'.

#### Changing Quality

Users can change the quality of an idea by giving it an upvote or downvote.  An idea quality can range from 'swill', 'plausible', to 'genius', in that order.

#### Dynamic Search Filtering

A user can search for ideas on the site using a dynamic search bar.  The search bar filters ideas by title and body as the user types.

#### Sorting

Ideas can be sorted by quality by clicking the 'Sort By Quality' button.

### Design

This website was styled using [Bootstrap](http://getbootstrap.com/) and utilizes [jQuery](https://jquery.com/) and AJAX to provide dynamic rendering.

### Test Suite

The test suite tests the application on multiple levels. To run all of the tests, run `rspec` from the terminal in the main directory of the project. The feature tests (integration tests) rely mainly on the [capybara gem](https://github.com/jnicklas/capybara) for navigating the various application views.

### Dependencies

This application depends on many ruby gems, all of which are found in the `Gemfile` and can be installed by running `bundle install` from the terminal in the main directory of the project.

### Collaborators

[David Tinianow](https://github.com/dtinianow)
