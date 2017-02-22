import Backbone from 'backbone'

export const ArtistListingView = Backbone.View.extend({
  el: '.article_content',

  playlistHtmlTemplate: function(modelList, radio){
    let playlistHtmlStr = modelList.map(function(playlistObj){
        // console.log(playlistObj)
      return `
        <div class="song-info">
          <h2 class="song-title">${playlistObj.title}</h2>
          <p><strong>${playlistObj.artist}</strong></p>
          <img class="playlist-img" src="${playlistObj.image}">
        </div>
          `
    }).join('')

    return `
    <h1><span>testing</span>123</h1>
    <div class="playlist-info">${playlistHtmlStr}
    </div>
    `
  },

  render: function(arrayOfArtists){
    this.el.innerHTML = this.playlistHtmlTemplate(modelList)
  }

})

export default ArtistListingView
