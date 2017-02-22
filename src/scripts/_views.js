import Backbone from 'backbone';
import {RadioModel} from './_models.js';

export const ArtistListingView = Backbone.View.extend({
  el: '.article_content',


  playlistHtmlTemplate: function(modelList){
    let playlistHtmlStr = modelList.map(function(playlistObj){
        // console.log(playlistObj)
    return `
        <div class="song-info">
          <h2 class="song-title">${playlistObj.get('title')}</h2>
          <p><strong>${playlistObj.get('artist')}</strong></p>
          <img class="playlist-img" src="${playlistObj.get('image')}">
        </div>
          `
    }).join('')

    return `
      <div class="playlist-info">
        ${playlistHtmlStr}
      </div>
    `
  },

  render: function(arrayOfArtistModels){
    this.el.innerHTML = this.playlistHtmlTemplate(arrayOfArtistModels)
  }

})


export const NavView = Backbone.View.extend({
  el: '.nav_bar',

  events: {
    "click .tabcontent_tab": 'handleShowSinglePage'
  },

  handleShowSinglePage: function(evt){
    console.log(evt.target)
    console.log(evt.target.dataset.route)
    let pageRoute = evt.target.dataset.route
    window.location.hash = `${pageRoute}`
  },

  render: function(){
    this.el.innerHTML = this.navBarHtmlTemplate()
  },

  navBarHtmlTemplate: function(){
    return `
    <div class="tabcontent_list">
      <span class="tabcontent_tab active" data-route="">Home</span>
      <span class="tabcontent_tab" data-route="radio/1">Our #1 Playlist</span>
      <span class="tabcontent_tab" data-route="radio/2" >Our #2 Playlist</span>
    </div>
    `
  }


})
