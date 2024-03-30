function printSongs(songsInfoArray) {

    class Song{
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = songsInfoArray.shift();
    const songsObj = {};
    const onlySongsNames = [];

    for (let i = 0; i < numberOfSongs; i++) {
        const [typeList, name, time] = songsInfoArray.shift().split('_');

        if (!songsObj[typeList]) {
            songsObj[typeList] = [];
        }

        const song = new Song(name, time);
        songsObj[typeList].push(song);
        onlySongsNames.push(song.name);
    }
    
    const searchingTypeList = songsInfoArray.shift();

    if (searchingTypeList === 'all') {
        onlySongsNames.forEach(song => console.log(song));
    } else {
        songsObj[searchingTypeList].forEach(song => console.log(song.name));
    }
}


// test code

printSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );

console.log();

printSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );

console.log();

printSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );