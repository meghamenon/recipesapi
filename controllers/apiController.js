function  index(req, res){
	res.json({

	message: 'Welcome to recipes api!',
	documentation_url: 'https://github.com/meghamenon/recipesapi',
	base_url: 'localhost:3000',
	endpoints: [


		{

			method: 'GET', path: 'api', description: 'recipes page'

		}

	]

});

}

module.exports = {
	index: index
}