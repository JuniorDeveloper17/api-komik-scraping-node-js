'user strict';

module.exports = function (app) {

    var jsonku = require('./controller/api_service');

    app.route('/')
        .get(jsonku.index);

    app.route('/terpopular')
        .get(jsonku.komik_popular);
    app.route('/berwarna')
        .get(jsonku.komik_berwarna);
    app.route('/romantis')
        .get(jsonku.komik_romantis);
    app.route('/isekai')
        .get(jsonku.komik_isekai);
    app.route('/fantasi')
        .get(jsonku.komik_fantasi);
    app.route('/aksi')
        .get(jsonku.komik_aksi);
    app.route('/terbaru')
        .get(jsonku.komik_terbaru);
    app.route('/genre')
        .get(jsonku.komik_genre);
    app.route('/tema')
        .get(jsonku.komik_thema);


    app.route('/populars/:page')
        .get(jsonku.komik_popular_page);
    app.route('/berwarnas/:page')
        .get(jsonku.komik_berwarna_page);
    app.route('/genres/:key/:page')
        .get(jsonku.komik_genre_page);
    app.route('/types/:key/:page')
        .get(jsonku.komik_type_page);
    app.route('/temas/:key/:page')
        .get(jsonku.komik_thema_page);


    app.route('/search/:key')
        .get(jsonku.komik_search);


    app.route('/detail/:urls')
        .get(jsonku.komik_detail);
    app.route('/baca/:urls')
        .get(jsonku.komik_baca);

























    //    app.route('/rekomendasi')
    //        .get(jsonku.rekomendasi);
    //
    //    app.route('/popular')
    //        .get(jsonku.popular);
    //
    //    app.route('/terbaru')
    //        .get(jsonku.newUpdate);
    //
    //    app.route('/warna/:page')
    //        .get(jsonku.warna);
    //
    //    app.route('/seru/:page')
    //        .get(jsonku.seru);
    //
    //    app.route('/search/:key')
    //        .get(jsonku.search);
    //
    //    app.route('/type/:type')
    //        .get(jsonku.type);
    //
    //    app.route('/genre')
    //        .get(jsonku.genre);
    //
    //    app.route('/getgenre/:page/:genre')
    //        .get(jsonku.byGenre);
    //
    //    app.route('/detail/:urls')
    //        .get(jsonku.details);
    //
    //    app.route('/baca/:url')
    //        .get(jsonku.baca)

}