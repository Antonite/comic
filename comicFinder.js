var comicDirs = [];
$.ajax({
    url: './comics/',
    success: function (data) {
        $(data).find("a:contains(COMIC_)").each(function () {
            comicDirs.push($(this).attr("href"));
        });
    }
});