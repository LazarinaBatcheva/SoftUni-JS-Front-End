function storeArticleComments(input) {
    const usernamesList = [];
    const articleNamesList = [];
    const commentsInfo = {};

    for (let data of input) {
        let username, articleName, commentTitle, commentContent;

        if (data.includes('user')) {
            username = data.split(' ')[1];
            usernamesList.push(username);
        } else if (data.includes('article')) {
            articleName = data.split(' ')[1];
            articleNamesList.push(articleName);
        } else {
            const [articleInfo, commentInfo] = data.split(': ');
            [username, articleName] = articleInfo.split(' posts on ');
            [commentTitle, commentContent] = commentInfo.split(', ');

            if (usernamesList.includes(username) && articleNamesList.includes(articleName)) {
                if (!commentsInfo[articleName]) {
                    commentsInfo[articleName] = [];
                }

                commentsInfo[articleName].push({username, commentTitle, commentContent});
            }
        }       
    };

Object.entries(commentsInfo)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([articleName, comments]) => {
        comments.sort((a, b) => a.username.localeCompare(b.username))
        console.log(`Comments on ${articleName}`)
        for ( let comment of comments) {
            console.log(`--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`);
        }
    });
}


// test code

storeArticleComments(['user aUser123', 
'someUser posts on someArticle: NoTitle, stupidComment', 
'article Books', 'article Movies', 'article Shopping', 'user someUser', 
'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 
'uSeR4 posts on Movies: I also like movies, I really do', 
'someUser posts on Shopping: title, I go shopping every day', 
'someUser posts on Movies: Like, I also like movies very much']);

console.log('-------------------');

storeArticleComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 
'article Bobby', 'article Steven', 'user Liam', 'user Henry', 
'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 
'someUser posts on Movies: Like']);
