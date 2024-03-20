function printMoviesInfo(data) {
    const addMovieCommand = 'addMovie';
    const directedByCommand = 'directedBy';
    const onDateCommand = 'onDate';
    const moviesInfo = [];

    function addMovie(line) {
        const movieName = {
            name: line.substring(addMovieCommand.length + 1),
        }

        moviesInfo.push(movieName);

        return moviesInfo;
    }

    function addDirector(line) {
        const [movieName, director] = line.split(` ${directedByCommand} `);
        const searchingMovie = moviesInfo.find(movie => movie.name === movieName);

        if (searchingMovie) {
            searchingMovie.director = director;
        }

        return moviesInfo;
    }

    function addDate(line) {
        const [movieName, date] = line.split(` ${onDateCommand} `);
        const searchingMovie = moviesInfo.find(movie => movie.name === movieName);

        if (searchingMovie) {
            searchingMovie.date = date;
        }

        return moviesInfo;
    }

    for (const line of data) {
        if (line.includes(addMovieCommand)) {
            addMovie(line);
        } else if (line.includes(directedByCommand)) {
            addDirector(line);
        } else if (line.includes(onDateCommand)) {
            addDate(line);
        }
    }

    moviesInfo
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}


// test code

printMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );

console.log();

printMoviesInfo([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );