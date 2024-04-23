console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

  }
 collection.push(record)
    return record;;
  }
  

console.log(myCollection);

addToCollection(myCollection, 'Still Crazy After All These Years', 'Paul Simon', '1975' );
addToCollection(myCollection, 'Sky Blue Sky', 'Wilco', '2007');
addToCollection(myCollection, 'Arthur (Or the Decline...', 'The Kinks', '1969');
addToCollection(myCollection, 'Check Your Head', 'Beastie Boys', '1992');
addToCollection(myCollection, '#1 Record', 'Big Star', '1972');
addToCollection(myCollection, 'The Story', 'Brandi Carlile', '2007');

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
