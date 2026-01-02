$(document).ready(function () {
    $(window).scroll(function () {
        let windowTop = $(window).scrollTop(),
            documentHeight = $(document).height(),
            windowHeight = $(window).height();
        let scroll = (windowTop / (documentHeight - windowHeight)) * 100;
        $('.scroll-line').css("width", (scroll + '%'));
    });
});