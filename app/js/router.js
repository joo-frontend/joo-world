directory.Router = Backbone.Router.extend({
    routeParams: {},
    routes: {
        "": "home",
        "mySchool": "mySchool"

    },
    initialize: function () {
        this.globalEventBinding();
        this.setWrapElement();
        this.elementAssign();
    },
    globalEventBinding: function () {
        /*App.event = new directory.globalEventView();
        App.util = new directory.globalUtil();*/
    },
    setWrapElement: function () {
        App.view.wrapContainer = new directory.wrapContainer();
        $('body').prepend(App.view.wrapContainer.render().el);
    },
    elementAssign: function () {
        this.$container = $("#container");
    },
    navigate: function (route, options) {
        var routeOption = {
            trigger: true,
            replace: true
        };
        var params = (options && options.params) ? options.params : null;
        this.param(route, params);
        if (route == Backbone.history.fragment) {
            Backbone.history.loadUrl(route);
        } else {
            Backbone.Router.prototype.navigate(route, routeOption);
        }
    },
    param: function (fragment, params) {
        var matchedRoute;
        _.any(Backbone.history.handlers, function (handler) {
            if (handler.route.test(fragment)) {
                matchedRoute = handler.route;
            }
        });
        if (params !== undefined) {
            this.routeParams[fragment] = $.extend(App.router.param(fragment), params);
        }
        return this.routeParams[fragment];
    },

    home: function () {
        App.view.homeMain = new directory.homeMain(this.routeParams);
    },
    mySchool: function () {
        App.view.mySchool = new directory.mySchool(this.routeParams);
    }

});