function generateComicSelector() {
    var a = document.getElementById("comicSlider");

    for (var i = 0; i<totalComics; i++) {
        if (comics.hasOwnProperty(comicNames[i])) {
            var comicLi = createImage(comicNames[i]);
            if(comicLi != 0) a.appendChild(createImage(comicNames[i]));
        }
    }
}

function createImage(name){
    var li = document.createElement('li');
    var a = document.createElement('a');
    var img = document.createElement('img');

    if(comics[name].length == 0) return 0;

    img.src = "." + comics[name][0];
    a.href = "#" + name;

    a.onclick = function () {
        $('#mainPageCollapser').click();
        $('#comicCollapser').click();
        currentComics = comics[name];
        currentComicNum = 0;
        $('body').css('background-image', 'url(' + currentComics[currentComicNum] + ')');
    }

    a.appendChild(img);
    li.appendChild(a);

    return li;
}