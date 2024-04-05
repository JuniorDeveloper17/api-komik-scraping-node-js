'user strict';

const axios = require('axios');
const cheerio = require('cheerio');

const responses = require('../res/responses');
const baseUrl = 'https://komiku.id';


//model 1
exports.index = function (req, res) {
    responses.succes('api komiko juniordev v1. disclaimer api ini hanya bertujuan untuk pembelajaran', res);
};











exports.rekomendasi = async function (req, res) {
    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const image = [];
    const like = [];
    const updateAt = [];
    const lastChapter = [];
    const url = [];

    const baseString = '#Trending_Komik .ls12 .ls2';

    $(`${baseString} .ls2j h4`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .ls2v a img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .ls2v .vw`).each((index, element) => {
        const value = $(element).text().trim();
        like.push(value);
    });

    $(`${baseString} .ls2j .ls2t`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .ls2j .ls2l`).each((index, element) => {
        const value = $(element).text().trim();
        lastChapter.push(value);
    });

    $(`${baseString} .ls2v a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, image.length, like.length, updateAt.length, lastChapter.length, url.length); i++) {
        var obj = {
            "title": title[i],
            "image": image[i],
            "like": like[i],
            "updateAt": updateAt[i],
            "lastChapter": lastChapter[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);

};

exports.popular = async function (req, res) {
    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const image = [];
    const like = [];
    const updateAt = [];
    const lastChapter = [];
    const url = [];

    const baseString = '#Komik_Hot .ls12 .ls2';


    $(`${baseString} .ls2j h4`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .ls2v a img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .ls2v .vw`).each((index, element) => {
        const value = $(element).text().trim();
        like.push(value);
    });

    $(`${baseString} .ls2j .ls2t`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .ls2j .ls2l`).each((index, element) => {
        const value = $(element).text().trim();
        lastChapter.push(value);
    });

    $(`${baseString} .ls2v a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, image.length, like.length, updateAt.length, lastChapter.length, url.length); i++) {
        var obj = {
            "title": title[i],
            "image": image[i],
            "like": like[i],
            "updateAt": updateAt[i],
            "lastChapter": lastChapter[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);


};

exports.newUpdate = async function (req, res) {
    const response = await axios.get(`${baseUrl}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const image = [];
    const like = [];
    const updateAt = [];
    const lastChapter = [];
    const url = [];

    const baseString = '#Terbaru .ls4';


    $(`${baseString} .ls4j h4`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .ls4v a img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .ls4v .up`).each((index, element) => {
        const value = $(element).text().trim();
        like.push(value);
    });

    $(`${baseString} .ls4j .ls4s`).each((index, element) => {
        const value = $(element).text().trim();
        updateAt.push(value);
    });

    $(`${baseString} .ls4j .ls24`).each((index, element) => {
        const value = $(element).text().trim();
        lastChapter.push(value);
    });

    $(`${baseString} .ls4v a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, image.length, like.length, updateAt.length, lastChapter.length, url.length); i++) {
        var obj = {
            "title": title[i],
            "image": image[i],
            "like": like[i],
            "updateAt": updateAt[i],
            "lastChapter": lastChapter[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
};

//model 2
exports.warna = async function (req, res) {
    const page = req.params.page;
    var urls;

    if (page == 1) {
        urls = `${baseUrl}/other/berwarna/`;
    } else {
        urls = `${baseUrl}/other/berwarna/page/${page}/`;
    }

    const response = await axios.get(urls);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const subttle = [];
    const image = [];
    const genre = [];
    const chapterBegin = [];
    const chapterNow = [];
    const deskripsi = [];
    const url = [];

    const baseString = '.daftar .bge';

    $(`${baseString} .kan a h3`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .kan .judul2`).each((index, element) => {
        const value = $(element).text().trim();
        subttle.push(value);
    });

    $(`${baseString} .bgei img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .bgei .tpe1_inf`).each((index, element) => {
        const value = $(element).text().trim();
        genre.push(value);
    });

    $(`${baseString} .kan .new1 a`).each((index, element) => {
        const value = $(element).children('span:eq(1)').text().trim();
        if (index % 2 == 0) {
            chapterBegin.push(value);
        } else {
            chapterNow.push(value);
        }
    });

    $(`${baseString} .kan p`).each((index, element) => {
        const value = $(element).text().trim();
        deskripsi.push(value);
    });

    $(`${baseString} .bgei a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, subttle.length, image.length, genre.length, chapterBegin.length, chapterNow.length, deskripsi.length, url.length,
    ); i++) {
        var obj = {
            "title": title[i],
            "subttle": subttle[i],
            "image": image[i],
            "genre": genre[i],
            "chapterBegin": chapterBegin[i],
            "chapterNow": chapterNow[i],
            "deskripsi": deskripsi[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.seru = async function (req, res) {
    const page = req.params.page;
    var urls;

    if (page == 1) {
        urls = `${baseUrl}/other/hot/`;
    } else {
        urls = `${baseUrl}/other/hot/page/${page}/`;
    }

    const response = await axios.get(urls);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const subttle = [];
    const image = [];
    const genre = [];
    const chapterBegin = [];
    const chapterNow = [];
    const deskripsi = [];
    const url = [];

    const baseString = '.daftar .bge';

    $(`${baseString} .kan a h3`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .kan .judul2`).each((index, element) => {
        const value = $(element).text().trim();
        subttle.push(value);
    });

    $(`${baseString} .bgei img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .bgei .tpe1_inf`).each((index, element) => {
        const value = $(element).text().trim();
        genre.push(value);
    });

    $(`${baseString} .kan .new1 a`).each((index, element) => {
        const value = $(element).children('span:eq(1)').text().trim();
        if (index % 2 == 0) {
            chapterBegin.push(value);
        } else {
            chapterNow.push(value);
        }
    });

    $(`${baseString} .kan p`).each((index, element) => {
        const value = $(element).text().trim();
        deskripsi.push(value);
    });

    $(`${baseString} .bgei a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });
    console.log(url);

    const api = [];
    for (var i = 0; i < Math.min(title.length, subttle.length, image.length, genre.length, chapterBegin.length, chapterNow.length, deskripsi.length, url.length,
    ); i++) {
        var obj = {
            "title": title[i],
            "subttle": subttle[i],
            "image": image[i],
            "genre": genre[i],
            "chapterBegin": chapterBegin[i],
            "chapterNow": chapterNow[i],
            "deskripsi": deskripsi[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

exports.search = async function (req, res) {
    const key = req.params.key;

    const response = await axios.get(`https://data.komiku.id/cari/?post_type=manga&s=${key}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const subttle = [];
    const image = [];
    const genre = [];
    const chapterBegin = [];
    const chapterNow = [];
    const deskripsi = [];
    const url = [];

    const baseString = '.daftar .bge';

    $(`${baseString} .kan a h3`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .kan .judul2`).each((index, element) => {
        const value = $(element).text().trim();
        subttle.push(value);
    });

    $(`${baseString} .bgei img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .bgei .tpe1_inf`).each((index, element) => {
        const value = $(element).text().trim();
        genre.push(value);
    });

    $(`${baseString} .kan .new1 a`).each((index, element) => {
        const value = $(element).children('span:eq(1)').text().trim();
        if (index % 2 == 0) {
            chapterBegin.push(value);
        } else {
            chapterNow.push(value);
        }
    });

    $(`${baseString} .kan p`).each((index, element) => {
        const value = $(element).text().trim();
        deskripsi.push(value);
    });

    $(`${baseString} .bgei a`).each((index, element) => {
        const value = $(element).attr('href').replace('https://komiku.id/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, subttle.length, image.length, genre.length, chapterBegin.length, chapterNow.length, deskripsi.length, url.length,
    ); i++) {
        var obj = {
            "title": title[i],
            "subttle": subttle[i],
            "image": image[i],
            "genre": genre[i],
            "chapterBegin": chapterBegin[i],
            "chapterNow": chapterNow[i],
            "deskripsi": deskripsi[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

//model 3
exports.type = async function (req, res) {
    const key = req.params.type;

    const response = await axios.get(`${baseUrl}/daftar-komik/?tipe=${key}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const image = [];
    const genre = [];
    const status = [];
    const updateAt = [];
    const url = [];

    $('.ls4 .ls4j h4 a').each((index, element) => {
        const value = $(element).text();
        title.push(value);
    });

    $('.ls4 .ls4v a img').each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $('.ls4 .ls4j span').each((index, element) => {
        const value = $(element).text();
        if (value.includes('Status')) {
            status.push(value);
        } else if (value.includes('Update')) {
            updateAt.push(value);
        } else if (value.includes(`${key}`)) {
            genre.push(value);
        }
    });

    $('.ls4 .ls4v a').each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, image.length, url.length); i++) {
        var obj = {
            "title": title[i],
            "image": image[i],
            "genre": genre[i],
            "status": status[i],
            "updateAt": updateAt[i],
            "url": url[i],
        };
        api.push(obj);
    }

    responses.succes(api, res);


}

exports.genre = async function (req, res) {
    const obj = [
        { "genre": "Action" }, { "genre": "Adventure" }, { "genre": "Comedy" }, { "genre": "Chrime" }, { "genre": "Demons" }, { "genre": "Drama" }, { "genre": "Horror" }, { "genre": "Fantasy" }, { "genre": "Magic" }, { "genre": "School" }, { "genre": "Isekai" }, { "genre": "Ecchi" }, { "genre": "Romantis" },
    ];

    responses.succes(obj, res);
}

exports.byGenre = async function (req, res) {
    const page = req.params.page;
    const genres = req.params.genre;
    var urls;

    if (page == 1) {
        urls = `${baseUrl}/genre/${genres}`;
    } else {
        urls = `${baseUrl}/genre/${genres}/page/${page}/`;
    }

    const response = await axios.get(urls);
    const html = await response.data;
    const $ = cheerio.load(html);

    const title = [];
    const subttle = [];
    const image = [];
    const genre = [];
    const chapterBegin = [];
    const chapterNow = [];
    const deskripsi = [];
    const url = [];

    const baseString = '.daftar .bge';

    $(`${baseString} .kan a h3`).each((index, element) => {
        const value = $(element).text().trim();
        title.push(value);
    });

    $(`${baseString} .kan .judul2`).each((index, element) => {
        const value = $(element).text().trim();
        subttle.push(value);
    });

    $(`${baseString} .bgei img`).each((index, element) => {
        const value = $(element).attr('data-src');
        image.push(value);
    });

    $(`${baseString} .bgei .tpe1_inf`).each((index, element) => {
        const value = $(element).text().trim();
        genre.push(value);
    });

    $(`${baseString} .kan .new1 a`).each((index, element) => {
        const value = $(element).children('span:eq(1)').text().trim();
        if (index % 2 == 0) {
            chapterBegin.push(value);
        } else {
            chapterNow.push(value);
        }
    });

    $(`${baseString} .kan p`).each((index, element) => {
        const value = $(element).text().trim();
        deskripsi.push(value);
    });

    $(`${baseString} .kan a`).each((index, element) => {
        const value = $(element).attr('href').replace('/manga', '');
        url.push(value);
    });

    const api = [];
    for (var i = 0; i < Math.min(title.length, subttle.length, image.length, genre.length, chapterBegin.length, chapterNow.length, deskripsi.length, url.length,
    ); i++) {
        var obj = {
            "title": title[i],
            "subttle": subttle[i],
            "image": image[i],
            "genre": genre[i],
            "chapterBegin": chapterBegin[i],
            "chapterNow": chapterNow[i],
            "deskripsi": deskripsi[i],
            "url": url[i],
        };
        api.push(obj);
    };

    responses.succes(api, res);
}

//model 4
exports.details = async function (req, res) {

    const urls = req.params.urls;
    const response = await axios.get(`${baseUrl}/manga/${urls}`);
    const html = await response.data;
    const $ = cheerio.load(html);


    const title = $('#Judul h1').text().trim();
    const subtitle = $('#Judul .j2').text().trim();;
    const image = $('#Informasi .ims img').attr('src');
    const jenisKomik = $('#Informasi .inftable tr td:eq(3)').map((index, element) => {
        const value = $(element).text().trim();
        return value;
    }).get()[0];
    const KonsepCerita = $('#Informasi .inftable tr td:eq(5)').map((index, element) => {
        const value = $(element).text().trim();
        return value;
    }).get()[0];
    const author = $('#Informasi .inftable tr td:eq(7)').map((index, element) => {
        const value = $(element).text().trim();
        return value;
    }).get()[0];
    const status = $('#Informasi .inftable tr td:eq(9)').map((index, element) => {
        const value = $(element).text().trim();
        return value;
    }).get()[0];
    const umurPembaca = $('#Informasi .inftable tr td:eq(11)').map((index, element) => {
        const value = $(element).text().trim();
        return value;
    }).get()[0];
    console.log(umurPembaca);
    const sinopsis = $('#Judul .desc').text().trim();
    const chapterBegin = $('#Judul .new1:eq(0)').text().trim();
    const chapterNow = $('#Judul .new1:eq(1)').text().trim();
    const genre = [];
    $('#Informasi .genre a').each((index, element) => {
        const value = $(element).text().trim();
        const value2 = $(element).attr('href').replace('/genre/', '').replace('/', '');

        const obj = {
            "genre": value,
            "url": value2
        }
        genre.push(obj);
    });
    const chapter = [];
    $('#Chapter ._3Rsjq tr:gt(0)').each((index, element) => {
        const value = $(element).children('.judulseries').text().trim();
        const value2 = $(element).children('.tanggalseries').text().trim();
        const value3 = $(element).children('.judulseries').children('a').attr('href').replace('/ch', '');;
        const obj = {
            "chapter": value,
            "tanggal": value2,
            "url": value3
        }
        chapter.push(obj);
    });
    const mirip = [];
    $('.grd').each((index, element) => {
        const title = $(element).children('a').children('.h4').text().trim();
        const image = $(element).children('a').children('.gmbr1').children('img').attr('data-src');
        const genre = $(element).children('a').children('.gmbr1').children('.tpe1_inf').text().trim();
        const sinopsis = $(element).children('p').text().trim();
        const url = $(element).children('a').attr('href').replace('/manga', '');
        const obj = {
            "title": title,
            "image": image,
            "genre": genre,
            "sinopsis": sinopsis,
            "url": url
        }
        mirip.push(obj);
    });

    const objs = {
        "title": title,
        "subtitle": subtitle,
        "image": image,
        "jenisKomik": jenisKomik,
        "KonsepCerita": KonsepCerita,
        "author": author,
        "status": status,
        "umurPembaca": umurPembaca,
        "sinopsis": sinopsis,
        "chapterBegin": chapterBegin,
        "chapterNow": chapterNow,
        "genre": genre,
        "chapter": chapter,
        "mirip": mirip,
    }

    responses.succes(objs, res);
}

exports.baca = async function (req, res) {

    const url = req.params.url;
    const response = await axios.get(`${baseUrl}/ch/${url}`);
    const html = await response.data;
    const $ = cheerio.load(html);

    const image = [];
    $('#Baca_Komik .ww').each((index, element) => {
        const value = $(element).attr('src');
        image.push(value);
    });

    responses.succes(image, res);
}


