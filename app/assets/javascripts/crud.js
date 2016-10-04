$(document).ready(function() {
  getIdeas();
  createIdea();
  deleteIdea();
});

function getIdeas() {
  $.ajax({
    url: '/api/v1/ideas',
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
    "<tr class=idea data-id='"
    + idea.id
    + "'><td>"
    + idea.title
    + "</td><td>"
    + truncate(idea.body)
    + "</td><td>"
    + idea.quality
    + "</td><td><button class='delete-idea'>Delete</button></td></tr>"
  )
};

function truncate( body ) {
  return body.split(' ').slice(0, 100).join(" ")
};

function handleError( error ) { console.log(error) };

function createIdea() {
  $('#save-new-idea').on('click', function(){
    var ideaParams = {
      idea: {
        title: $('#idea-title').val(),
        body: $('#idea-body').val(),
        quality: 0
      }
    }
    $.post('/api/v1/ideas', ideaParams)
    .then(createIdeaHTML)
    .then(renderIdea)
    .fail(handleError)
  })
}

function deleteIdea() {
  $('#ideas-table').on('click', '.delete-idea', function(){
    var $idea = $(this).closest('.idea');
    $.ajax({
      url: '/api/v1/ideas/' + $idea.data('id'),
      type: 'delete'
    }).then(function(){
      $idea.remove()
    }).fail(handleError)
  })
}





// function deletePosts(){
//   $("#latest-posts").on("click", "#delete-post", function(){
//     var $post = $(this).closest(".post")
//     $.ajax({
//       url: "http://turing-birdie.herokuapp.com/api/v1/posts/" + $post.data("id") + ".json",
//       type: "delete"
//     }).then(function(){
//       $post.remove()
//     }).fail(handleError)
//   })
// }
//
// function pollPosts(){
//   setInterval(fetchPosts, 3000)
// }
