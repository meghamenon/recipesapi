console.log("Hi");

$(document).ready(function(){
	console.log('frontend.js is loaded!');

	$.ajax({

		method: 'GET',
		url: '/api/recipes',
		success: handleSuccess,
		error: handleError
	});

  $('#recipe-form form').on("submit", function(event){
    event.preventDefault();
    var formData = $(this).serialize();
    $(this).trigger("reset");

   $.ajax({
    method: 'POST',
    url: '/api/recipes',
    data: formData,
    success: handleSucc,
    error: handleError
  })

})

$('#recipes').on('click', '.add-recipe', function(e) {
    console.log('add-recipe clicked!');
    var id= $(this).closest('.recipe').data('recipe-id'); 
    console.log('id',id);
});

});

function handleSuccess(recipes){
	var renderedRecipes = recipes.forEach(function(recipe){
		renderRecipes(recipe);
	});
};

function handleSucc (createdAlbum) {  
  renderRecipes(createdAlbum);

};


function handleError(err){
	console.log('There has been an error: ', err);
}

function renderRecipes(recipes){
	console.log('rendering Recipes', recipes)
	var htmlToAppend = (`
    <div class='row'>
      <div class="col-md-3 col-xs-12 thumbnail album-art">
        <img src="" alt="">
      </div>

      <div class="col-md-9 col-xs-12">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class='inline-header'>Recipe Name:</h4>
            <span class='recipe-type'>${ recipes.recipeName }</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>Recipe Type:</h4>
            <span class='recipe-type'>${ recipes.type }</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>ingredients:</h4>
            <span class='recipe-type'>${ recipes.ingredients }</span>
          </li>

        </ul>
      </div>

    </div>
  `);

  $('#recipes').prepend(htmlToAppend);
};