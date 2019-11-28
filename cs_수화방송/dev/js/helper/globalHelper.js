
/*
    작성자 : 오샛별 <> 작성일 : 2017-08-30
    return BIZ플랫폼 IMG HEADER URL
*/
Handlebars.registerHelper("bizfImgURL", function () {
    return App.config.settopInfo.urlPopServer;
});