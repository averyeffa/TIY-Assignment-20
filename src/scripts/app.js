import Backbone from 'backbone';
import $ from 'jquery';
import {RadioModel, RadioCollectionOne, RadioCollectionTwo, RadioCollectionIntro} from './_models.js';
import {ArtistListingView, NavView} from './_views.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		let navViewInstance = new NavView()
			navViewInstance.render()
		Backbone.history.start()
	},

	routes: {
		'' : 'showHomePage',
		'radio/1' : 'showRadioOne',
		'radio/2' : 'showRadioTwo'
	},




	showHomePage: function(){
		// console.log(isthisthingon)
		let articleContainerEl = document.querySelector('.article_content')

		let radioCollectionIntro =  new RadioCollectionIntro()

		radioCollectionIntro.fetch().then(function(serverRes){
			let modelsListIntro = radioCollectionIntro.models
			let viewInstance = new ArtistListingView()
			viewInstance.render(radioCollectionIntro)
					// let outputHtmlStr = playlistHtmlTemplate(modelsListOne, "Radio1")
					// articleContainerEl.innerHTML = outputHtmlStr
		})
},




	showRadioOne: function(){
		// console.log(isthisthingon)
		let articleContainerEl = document.querySelector('.article_content')

		let radioCollectionOne =  new RadioCollectionOne()

		radioCollectionOne.fetch().then(function(serverRes){
			let modelsListOne = radioCollectionOne.models
			let viewInstance = new ArtistListingView()
			viewInstance.render(radioCollectionOne)
			// let outputHtmlStr = playlistHtmlTemplate(modelsListOne, "Radio1")
			// articleContainerEl.innerHTML = outputHtmlStr
		})
},



showRadioTwo: function(){
	let articleContainerEl = document.querySelector('.article_content')

	let radioCollectionTwo =  new RadioCollectionTwo()

	radioCollectionTwo.fetch().then(function(serverRes){
		let modelsListTwo = radioCollectionTwo.models
		let viewInstance = new ArtistListingView()
		viewInstance.render(radioCollectionTwo)
		// let outputHtmlStr = playlistHtmlTemplate(modelsListTwo, "Radio2")
		// articleContainerEl.innerHTML = outputHtmlStr
	})
},
})

let myRadioApplication = new AppRouter()
