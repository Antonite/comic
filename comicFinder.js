var comics = [];
var comicNames = [];
var comicsLoaded = 0;
var totalComics = 0;
var currentComics = [];
var currentComicNum = 0;

function findComics() {
    $.ajax({
        url: './comics',
        success: function (data) {
            var comicPaths = $(data).find("a:contains(COMIC_)");
            totalComics = comicPaths.length;
            comicPaths.each(function () {
                var comicName = $(this).attr("href").substring(14).slice(0, -1);
                findPics($(this).attr("href"), comicName);
            });
        }
    });
}

function findPics(dir, comicName) {
    var comicPics = [];
    $.ajax({
        url: '.' + dir,
        success: function (data) {
            $(data).find("a:contains(.jpeg)").each(function () {
                comicPics.push($(this).attr("href"));
            });
            comics[comicName] = comicPics;
            comicsLoaded++;
            processComics();
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function processComics() {
    if(comicsLoaded < totalComics) return;

    for (var key in comics) {
        if (comics.hasOwnProperty(key)) {
            comicNames.push(key);
        }
    }
    generateComicSelector();
}