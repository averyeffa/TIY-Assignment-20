import Backbone from 'backbone';
import $ from 'jquery';
import {RadioCollectionOne, RadioCollectionTwo} from './_models.js';
import {ArtistListingView} from './_views.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'' : 'showHomePage',
		'radio/1' : 'showRadioOne',
		'radio/2' : 'showRadioTwo'
	},




	showHomepage: function(){
		// console.log(isthisthingon)
		let articleContainerEl = document.querySelector('.article_content')
			articleContainerEl.innerHTML = `<div><p>HELLOOOOO</p></div>`
},



	showRadioOne: function(){
		// console.log(isthisthingon)
		let articleContainerEl = document.querySelector('.article_content')

		let radioCollectionOne =  new RadioCollectionOne()

		radioCollectionOne.fetch().then(function(serverRes){
			let modelsListOne = radioCollectionOne.models
			let outputHtmlStr = playlistHtmlTemplate(modelsListOne, "Radio1")
			articleContainerEl.innerHTML = outputHtmlStr
		})
},



showRadioTwo: function(){
	let articleContainerEl = document.querySelector('.article_content')

	let radioCollectionTwo =  new RadioCollectionTwo()

	radioCollectionTwo.fetch().then(function(serverRes){
		let modelsListTwo = radioCollectionTwo.models
		let outputHtmlStr = playlistHtmlTemplate(modelsListTwo, "Radio2")
		articleContainerEl.innerHTML = outputHtmlStr
	})
},
})

let myRadioApplication = new AppRouter()
