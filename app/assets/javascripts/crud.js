$(document).ready(function(){
  getIdeas();
})

function getIdeas(){
  $.ajax({
    url: 'http://localhost:3000/api/v1/ideas',
    type: 'get',
    success: function(ideas){
      $.each(ideas, function(index, idea) {
        renderIdea(idea)
      })
    }
  })
}

function renderIdea(idea){
  $('#ideas-table').append(
    "<tr class='idea'><td>" +
    idea.title +
    "</td><td>" +
    idea.body +
    "</td><td>" +
    idea.quality +
    "</td></tr>"
  )
}
//
// function fetchPosts(){
//   $.ajax({
//     url: "https://turing-birdie.herokuapp.com/api/v1/posts",
//     type: "get"
//   }).then(collectPosts)
//   .then(renderPost)
//   .fail(handleError)
// }
//
// function createPostHTML( post ){
//   return $("<div class='post' data-id='"
//   + post.id
//   + "'><h6>Published on: "
//   + post.created_at
//   + "</h6><p>"
//   + post.description
//   + "</p>"
//   + "<button id='delete-post' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>"
//   + "</div>")
// }
//
// function handleError(error){ console.log(error) }
//
// function collectPosts( postsData ){
//   return postsData.map(createPostHTML);
// }
//
// function renderPost( postData ) {
//   $("#latest-posts").append(postData)
// }
//
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
