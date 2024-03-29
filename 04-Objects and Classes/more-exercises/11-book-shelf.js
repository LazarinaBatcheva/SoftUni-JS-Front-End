function storeBookshelfsInfo(data) {
    const bookshelfsInfo = {};

    data.forEach(line => {
        if (line.includes('->')) {
            const [shelfId, shelfGenre] = line.split(' -> ');
            
            if (!bookshelfsInfo.hasOwnProperty(shelfId)) {
                bookshelfsInfo[shelfId] = {genre: shelfGenre, books: []};
            }
        } else {
            const [bookTitle, bookData] = line.split(': ');
            const [author, bookGenre] = bookData.split(', ');

            for (let id in bookshelfsInfo) {
                if (bookshelfsInfo[id].genre === bookGenre) {
                    bookshelfsInfo[id].books.push({title: bookTitle, author});
                }
            }
        }
    })

    const sortedShelves = Object.entries(bookshelfsInfo)
                                .sort((a, b) => b[1].books.length - a[1].books.length)
                                .map(([shelfId, shelf]) => ({ id: shelfId, ...shelf }));

    sortedShelves.forEach(shelf => {
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);
        shelf.books.forEach(book => console.log(`--> ${book.title}: ${book.author}`));
    });
}


// tets code

storeBookshelfsInfo(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', 
'2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 
'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 
'Lions and Rats: Gabe Roads, history', '2 -> romance', 
'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 
'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);

console.log('-------------------------');

storeBookshelfsInfo(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
);
