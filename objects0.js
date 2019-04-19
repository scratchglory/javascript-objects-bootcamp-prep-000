//assign an object to the variable playlist
var playlist = { artistName: "songTitle" };

//create a function updatePlaylist accepting 3 parameters: playlist(object), artistName(a string), songTitle
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle"
  return playlist
}
  
// create a function removeFromPlaylist accepts 2 arguments
//delete the key-value pair from the playlist and return the updated playlist
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

