$(document).ready(function() {
  getIdeas();
});

function getIdeas() {
  var x = $.ajax({
    url: 'http://localhost:3000/api/v1/ideas',
    type: 'get',
  }).then(collectIdeas)
  .then(renderIdea)
  .fail(handleError)
};

function collectIdeas( ideasData ) {
  return ideasData.map(createIdeaHTML);
};

function renderIdea( ideaData ) {
  $('#ideas-table').append(ideaData);
};

function createIdeaHTML( idea ) {
  return $(
    "<tr id='idea-"
    + idea.id
    + "'><td>"
    + idea.title
    + "</td><td>"
    + truncate(idea.body)
    + "</td><td>"
    + idea.quality
    + "</td><td></tr>"
  )
};

function truncate( body ){
  return body.split(' ').slice(0, 100).join(" ")
};

function handleError( error ) { console.log(error) };
