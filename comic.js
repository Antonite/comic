// Wait for the page to load first
window.onload = function () {
    findComics();

    var rightArrowDiv = document.getElementById("rightArrowDiv");
    var leftArrowDiv = document.getElementById("leftArrowDiv");
    var upArrowDiv = document.getElementById("upArrowDiv");

    rightArrowDiv.onclick = function () {
        if(currentComics.length - 1 == currentComicNum) return;
        $('body').css('background-image', 'url(' + currentComics[currentComicNum + 1] + ')');
        currentComicNum++;
        return false;
    }

    leftArrowDiv.onclick = function () {
        if(0 == currentComicNum) return;
        $('body').css('background-image', 'url(' + currentComics[currentComicNum - 1] + ')');
        currentComicNum--;
        return false;
    }

    upArrowDiv.onclick = function () {
        $('#comicCollapser').click();
        $('#mainPageCollapser').click();
        document.body.style.background = null;
        return false;
    }

    $('#mainPageCollapser').click();
}