$(document).ready(function() {
  getIdeas();
  createIdea();
});

function getIdeas() {
  var x = $.ajax({
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
    "<tr id='idea-"
    + idea.id
    + "'><td>"
    + idea.title
    + "</td><td>"
    + truncate(idea.body)
    + "</td><td>"
    + idea.quality
    + "</td></tr>"
  )
};

function truncate( body ) {
  return body.split(' ').slice(0, 100).join(" ")
};

function handleError( error ) { console.log(error) };

function createIdea() {
  $('#submit-new-idea').on('click', function(){
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
// function fetchPostsButton() {
//   $("button[name=button-fetch]").on("click", fetchPosts)
// }
//
// function createPost(){
//   $("#create-post").on("click", function(){
//     var postParams = {
//       post: {
//         description: $("#post-description").val()
//       }
//     }
//
//     $.post("http://turing-birdie.herokuapp.com/api/v1/posts.json", postParams)
//     .then(createPostHTML)
//     .then(renderPost)
//     .fail(handleError)
//     // url: "http://turing-birdie.herokuapp.com/api/v1/posts.json",
//     // type: "post",
//     // data: postParams
//   })
// }
//
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
