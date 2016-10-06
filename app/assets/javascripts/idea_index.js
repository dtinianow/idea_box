function getIdeas() {
  $.ajax({
    type: 'get',
    url: '/api/v1/ideas'
  }).then(collectIdeas)
  .then(renderIdea)
  .fail(handleError)
};

function collectIdeas( ideasData ) {
  return ideasData.map(createIdeaHTML);
};

function renderIdea( ideaData ) {
  $('#ideas-table').prepend(ideaData);
};
