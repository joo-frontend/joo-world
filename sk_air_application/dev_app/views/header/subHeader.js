directory.subHeader = Backbone.View.extend({
    data: {},
    render: function (opt) {
        var self = this;
        var isMySchoolDetail = false;
        var isAirMultiSensor = false;
        if(window.location.hash == "#mySchoolDetail"){
            isMySchoolDetail = true;
        } else if (window.location.hash == "#airMultiSensor"){
            isAirMultiSensor = true;
        }
        self.data.isMySchoolDetail = isMySchoolDetail;
        self.data.isAirMultiSensor = isAirMultiSensor;
        $('.wrap_header').html(templete["header/subHeader"](self.data)).addClass('wrap_header_bd');
        return this;
    }
})