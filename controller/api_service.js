'user strict';

const axios = require('axios');
const cheerio = require('cheerio');
const responses = require('../res/responses');
const baseUrl = 'https://komikindo.tv';


exports.index = function (req, res) {
    responses.succes('api komiko juniordev v1. disclaimer api ini hanya bertujuan untuk pembelajaran', res);
};

//====tanpa page=====//

exports.komik_popular = async function (req, res) {

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .post-show.mangapopuler .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigor a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigor .adds a`).each((index, element) => {
        const value = $(element).text().trim();
        chapter.push(value);
    });

    $(`${baseString} .bigor .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigor`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes(api, res);
}

exports.komik_berwarna = async function (req, res) {

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .whites:eq(3) .post-show .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigor a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigor .adds a`).each((index, element) => {
        const value = $(element).text().trim();
        chapter.push(value);
    });

    $(`${baseString} .bigor .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigor`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes(api, res);
}

exports.komik_romantis = async function (req, res) {

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];



    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .whites.odadinggenre  #romantis .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.komik_isekai = async function (req, res) {

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];



    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .whites.odadinggenre  #isekai .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.komik_fantasi = async function (req, res) {

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];



    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .whites.odadinggenre  #fantasi .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.komik_aksi = async function (req, res) {

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];

    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .whites.odadinggenre  #aksi .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = [];

    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.komik_terbaru = async function (req, res) {

    const image = [];
    const title = [];
    const ratting = [];
    const type = [];
    const views = [];
    const color = [];
    const status = [];
    const chapter = [];
    const url = [];

    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const baseString = '.postbody .post-show.chapterbaru .animposx';

    $(`${baseString} .animepostxx-top a .limietles img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .animepostxx-top`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });

    $(`${baseString} .animepostxx-top .animepostxx-top-bottom`).each((index, element) => {
        const value = $(element).children('a').children('.tt').text().trim();
        title.push(value);
    });

    $(`${baseString} .animepostxx-top .animepostxx-top-bottom a .info-skroep`).each((index, element) => {
        const rat = $(element).children('.flex-skroep.nginfo-skroep:eq(0)').text().trim();
        const typ = $(element).children('.flex-skroep.nginfo-skroep:eq(1)').text().trim();
        const view = $(element).children('.flex-skroep.nginfo-skroep:eq(2)').text().trim();
        const col = $(element).children('.flex-skroep.nginfo-skroep:eq(3)').text().trim();
        ratting.push(rat);
        type.push(typ);
        views.push(view);
        color.push(col);
    });

    $(`${baseString} .animepostxx-bottom .info-skroep`).each((index, element) => {
        const value = $(element).children('.flex-skroep.nginfo-skroep:eq(0)').text().trim();
        status.push(value);
    });

    $(`${baseString} .animepostxx-bottom .info-skroep`).each((index, element) => {
        const value = $(element).children('.flex-skroep.nginfo-skroep:eq(1)').children('.lsch:eq(0)').text().trim();
        chapter.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, views.length, color.length, status.length, chapter.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "type": type[i],
            "views": views[i],
            "color": color[i],
            "status": status[i],
            "chapter": chapter[i],
            "url": url[i],
        };
        api.push(obj);
        console.log(url.length);
        console.log(title.length);
    }
    responses.succes(api, res);

}

exports.komik_genre = async function (req, res) {
    responses.succes(['Action', 'Adventure', 'Boys-Love', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Girls-Love', 'Harem', 'Historical', 'Horror', 'Isekai', 'Magical-Girls', 'Mecha', 'Medical', 'Music', 'Mystery', 'Philosophical', 'Psychological', 'Romance', 'Sci-Fi', 'Shoujo-Ai', 'Shounen-Ai', 'Slice-of-Life', 'Sports', 'Superhero', 'Thriller', 'Tragedy', 'Wuxia', 'Yuri'], res);
}

exports.komik_thema = async function (req, res) {
    responses.succes(['Aliens', 'Animals', 'Cooking', 'Crossdressing', 'Delinquents', 'Demons', 'Ecchi', 'Genderswap', 'Ghosts', 'Gore', 'Gyaru', 'Harem', 'Incest', 'Loli', 'Mafia', 'Magic', 'Martial-Arts', 'Military', 'Monster-Girls', 'Monsters', 'Music', 'Ninja', 'Office-Workers', 'Police', 'Post-Apocalyptic', 'Reincarnation', 'Reverse-Harem', 'Samurai', 'School-Life', 'Shota', 'Smut', 'Supernatural', 'Survival', 'Time-Travel', 'Traditional-Games', 'Vampires', 'Video-Games', 'Villainess', 'Virtual-Reality', 'Zombies',], res);
}

exports.komik_search = async function (req, res) {

    const key = req.params.key;

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];


    const response = await axios.get(`${baseUrl}/?s=${key}`);
    const html = await response.data;
    const $ = cheerio.load(html);


    const baseString = '.film-list .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = []
    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}




//====dengan page=====//

exports.komik_popular_page = async function (req, res) {
    const page = req.params.page;

    const image = [];
    const title = [];
    const ratting = [];
    const color = [];
    const type = [];
    const url = [];

    var maxPage;

    var urls;

    if (page == 1) {
        urls = `${baseUrl}/komik-populer/`;
    } else {
        urls = `${baseUrl}/komik-populer/page/${page}/`;
    }

    const response = await axios.get(`${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    $(`.film-list .pagination .page-numbers:eq(-2)`).each((index, element) => {
        const value = $(element).text().trim();
        maxPage = value;
    });

    const baseString = '.listupd .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors .adds .rating`).each((index, element) => {
        const value = $(element).text().trim();
        ratting.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });


    const api = []
    for (var i = 0; i < Math.min(image.length, title.length, ratting.length, type.length, url.length
    ); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "ratting": ratting[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes({
        "pageNow": page,
        "maxPage": maxPage,
        "data": api
    }, res);

}

exports.komik_berwarna_page = async function (req, res) {
    const page = req.params.page;

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    var maxPage;

    var urls;

    if (page == 1) {
        urls = `${baseUrl}/komik-berwarna/`;
    } else {
        urls = `${baseUrl}/komik-berwarna/page/${page}/`;
    }

    const response = await axios.get(`${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    $(`.film-list .pagination .page-numbers:eq(-2)`).each((index, element) => {
        const value = $(element).text().trim();
        maxPage = value;
        console.log(maxPage);
    });

    const baseString = '.listupd .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });

    $(`${baseString} .bigors .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigors .adds .lsch a`).each((index, element) => {
        const value = $(element).text().trim();
        chapter.push(value);
    });

    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes({
        "pageNow": page,
        "maxPage": maxPage, "data": api
    }, res);
}

exports.komik_genre_page = async function (req, res) {
    const page = req.params.page;
    const key = req.params.key;

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    var maxPage;

    var urls;

    if (page == 1) {
        urls = `${baseUrl}/genres/${key}/`;
    } else {
        urls = `${baseUrl}/genres/${key}/page/${page}/`;
    }

    const response = await axios.get(`${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    $(`.film-list .pagination .page-numbers:eq(-2)`).each((index, element) => {
        const value = $(element).text().trim();
        maxPage = value;
    });

    const baseString = '.film-list .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigor a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigor`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });

    $(`${baseString} .bigor .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigor .adds .lsch a`).each((index, element) => {
        const value = $(element).text().trim();
        chapter.push(value);
    });

    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes({
        "pageNow": page,
        "maxPage": maxPage, "data": api
    }, res);
}

exports.komik_type_page = async function (req, res) {
    const page = req.params.page;
    const key = req.params.key;

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    var maxPage;

    var urls;

    if (page == 1) {
        urls = `${baseUrl}/${key}/`;
    } else {
        urls = `${baseUrl}/${key}/page/${page}/`;
    }

    const response = await axios.get(`${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    $(`.listupd .pagination .page-numbers:eq(-2)`).each((index, element) => {
        const value = $(element).text().trim();
        maxPage = value;
    });

    const baseString = '.listupd .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigors a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigors`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });

    $(`${baseString} .bigors .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigors .adds .lsch`).each((index, element) => {
        const value = $(element).children(' a:last').text().trim();
        chapter.push(value);
    });

    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes({
        "pageNow": page,
        "maxPage": maxPage, "data": api
    }, res);


}

exports.komik_thema_page = async function (req, res) {
    const page = req.params.page;
    const key = req.params.key;

    const image = [];
    const color = [];
    const type = [];
    const title = [];
    const chapter = [];
    const updateAt = [];
    const url = [];

    var maxPage;

    var urls;

    if (page == 1) {
        urls = `${baseUrl}/tema/${key}/`;
    } else {
        urls = `${baseUrl}/tema/${key}/page/${page}/`;
    }

    const response = await axios.get(`${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    $(`.film-list .pagination .page-numbers:eq(-2)`).each((index, element) => {
        const value = $(element).text().trim();
        maxPage = value;
    });

    const baseString = '.film-list .animposx';

    $(`${baseString} .limit img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    $(`${baseString} .limit .typeflag`).each((index, element) => {
        const value = $(element).attr('class').replace('typeflag ', '');
        type.push(value);
    });

    $(`${baseString} .limit .warnalabel`).each((index, element) => {
        const value = $(element).text().trim();
        color.push(value);
    });

    $(`${baseString} .bigor a .tt`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .bigor`).each((index, element) => {
        const value = $(element).children('a:eq(0)').attr('href').replace('https://komikindo.tv/komik', '');
        url.push(value);
    });

    $(`${baseString} .bigor .adds .datech`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .bigor .adds .lsch a`).each((index, element) => {
        const value = $(element).text().trim();
        chapter.push(value);
    });

    const api = [];

    for (var i = 0; i < Math.min(image.length, type.length, title.length, chapter.length, updateAt.length, url.length); i++) {
        var obj = {
            "image": image[i],
            "title": title[i],
            "color": color[i] == null ? 'black and white' : color[i],
            "type": type[i],
            "chapter": chapter[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    };
    responses.succes({
        "pageNow": page,
        "maxPage": maxPage, "data": api
    }, res);
}

//====detail=====//

exports.komik_detail = async function (req, res) {
    const urls = req.params.urls;

    const response = await axios.get(`${baseUrl}/komik/${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);


    const baseString = '.postbody';

    const title = $('.infoanime .entry-title').text().trim().replace('\n', ' ');
    const chapterBegin = $('.infoanime .epsbaru .epsbr.chapter-awal .epsbr-left .barunew').text().trim().replace('\n', ' ');
    const chapterNow = $('.infoanime .epsbaru .epsbr .epsbr-box .epsbr-left .barunew:last').text().trim().replace('\n', ' ');
    const image = $('.infoanime .thumb img').attr('src');
    const ratting = $('.infoanime .thumb .rt .clearfix.archiveanime-rating i').text().trim() + ' ' + $('.infoanime .thumb .rt .clearfix.archiveanime-rating .votescount').text().trim();
    const synopsis = $('.tabsarea #sinopsis .entry-content.entry-content-single').text().trim().replace(/\n/g, ' ');

    let titleAlternatif = '';
    let status = '';
    let pengarang = '';
    let ilustrator = '';
    let grafis = '';
    let jenis = '';
    let official = '';
    let jumlahPembaca = '';
    $('.infoanime .spe span').each((index, element) => {
        const value = $(element).text();
        if (value.includes('Judul Alternatif')) {
            titleAlternatif = value.trim().replace('Judul Alternatif:\n', '');
        } else if (value.includes('Status')) {
            status = value.trim().replace('Status:\n', '');
        } else if (value.includes('Pengarang')) {
            pengarang = value.trim().replace('Pengarang:\n', '');
        } else if (value.includes('Ilustrator')) {
            ilustrator = value.trim().replace('Ilustrator:\n', '');
        } else if (value.includes('Grafis')) {
            grafis = value.trim().replace('Grafis:\n', '');
        } else if (value.includes('Jenis Komik')) {
            jenis = value.trim().replace('Jenis Komik:\n\n', '');
        } else if (value.includes('Official')) {
            official = value.trim().replace('Official:', '');
        } else if (value.includes('Jumlah Pembaca')) {
            jumlahPembaca = value.trim().replace('Jumlah Pembaca:\n', '');
        } else if (value.includes('Jumlah Pembaca')) {
            jumlahPembaca = value.trim().replace('Jumlah Pembaca:\n', '');
        }
    });

    const informasi = [];
    $(`.infoanime .spe span:eq(-2) .person`).slice(0, -1).each((index, element) => {
        const img = $(element).children('.img').children('a').children('img').attr('src');
        const title = $(element).children('.data').children('.name').text().trim();
        informasi.push({
            "img": img,
            "title": title
        });
    });

    const genre = [];
    $(`.infoanime .genre-info a`).each((index, element) => {
        const value = $(element).text().trim();
        genre.push(value);
    });

    const chapters = [];
    $(`.eps_lst .bxcl.scrolling ul .lchx a`).each((index, element) => {
        const url = $(element).attr('href').replace('https://komikindo.tv', '');
        const chapter = $(element).text().trim().replace('\n', '');
        chapters.push({
            "url": url,
            "chapter": chapter
        });
    });

    const spolier = [];
    $(`.tabsarea .spoiler .spoiler-img img`).each((index, element) => {
        const value = $(element).attr('src');
        spolier.push(value);
    });

    const mirip = [];
    $(`.tabsarea .widget-post.miripmanga .serieslist li`).each((index, element) => {
        const image = $(element).children('.imgseries').children('.series').children('img').attr('src');
        const type = $(element).children('.imgseries').children('.series').attr('class').replace('typeflag', '');
        const genre = $(element).children('.imgseries').children('.series').text().trim().replace('\n', '');
        const title = $(element).children('.leftseries').children('h4').children('.series').text().trim();
        const deskripsi = $(element).children('.leftseries').children('.excerptmirip').text().trim();
        const url = $(element).children('.imgseries').children('.series').attr('href').replace('https://komikindo.tv/komik', '');

        mirip.push({
            "image": image,
            "type": type,
            "genre": genre,
            "title": title,
            "deskripsi": deskripsi,
            "url": url
        })
    });

    responses.succes({
        'title': title,
        'chapterBegin': chapterBegin,
        'chapterNow': chapterNow,
        'image': image,
        'ratting': ratting,
        'titleAlternatif': titleAlternatif,
        'status': status,
        'pengarang': pengarang,
        'ilustrator': ilustrator,
        'grafis': grafis,
        'jenis': jenis,
        'official': official,
        'jumlahPembaca': jumlahPembaca,
        'synopsis': synopsis,
        'informasi': informasi,
        'genre': genre,
        'chapters': chapters,
        'spolier': spolier,
        'mirip': mirip
    }, res)

}

exports.komik_baca = async function (req, res) {
    const urls = req.params.urls;

    const response = await axios.get(`${baseUrl}/${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);



    const baseString = '.chapter-area .chapter-content ';

    const title = $(`${baseString} .dtlx h1`).text().trim().replace('\n', ' ');
    const chapterBegin = $(`${baseString} .navig .nextprev a`).filter((_, element) => $(element).text().trim() === '« Chapter Sebelumnya').attr('href');
    const chapterNext = $(`${baseString} .navig .nextprev a`).filter((_, element) => $(element).text().trim() === 'Chapter Selanjutnya »').attr('href');
    const image = [];
    $(`${baseString} .chapter-image.eastengine.bc #chimg-auh img`).each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    responses.succes({
        "title": title,
        "chapterBegin": chapterBegin,
        "chapterNext": chapterNext,
        "image": image
    }, res);

}



