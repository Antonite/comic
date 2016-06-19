// Wait for the page to load first
window.onload = function () {
    findComics();

    // var comicViewer = document.getElementById("comicViewer");
    // comicViewer.style.visibility = "hidden";

    var rightArrowDiv = document.getElementById("rightArrowDiv");
    var leftArrowDiv = document.getElementById("leftArrowDiv");
    var upArrowDiv = document.getElementById("upArrowDiv");

    rightArrowDiv.onclick = function () {
        return false;
    }

    leftArrowDiv.onclick = function () {
        return false;
    }

    upArrowDiv.onclick = function () {
        $('#comicCollapser').click();
        $('#mainPageCollapser').click();
        return false;
    }

    $('#mainPageCollapser').click();
}