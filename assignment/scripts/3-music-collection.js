console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let  record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

  }
  collection.push(record);
  return record;
}

console.log(myCollection);

addToCollection(myCollection, 'Lets Dance', 'David Bowie', 1983);
addToCollection(myCollection, 'Money for Nothing', 'Dire Straits', 1985);
addToCollection(myCollection, 'Youre So Vain', 'Carly Simon', 1972);
addToCollection(myCollection, 'Beat It', 'Michael Jackson', 1982);
addToCollection(myCollection, 'While My Guitar Gently Weeps', 'The Beatles', 1968);
addToCollection(myCollection, 'Goldfinger', 'Shirly Bassey', 1965);

console.log(myCollection);

function showCollection(myCollection) {
  for (let record of myCollection) {
    console.log('Song title: ' + record.title + ' Artist: ' + record.artist + ' Year published: ' + record.yearPublished);
  }
}
console.log(showCollection(myCollection));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
