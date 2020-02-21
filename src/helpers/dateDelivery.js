module.exports = function getDateDelivery() {
    var d = new Date();
    var date = new Date(d.valueOf() - d.getTimezoneOffset() * 60000);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var daysWeek = date.getDay();
    var daysMonth = new Date(year, month, 0).getDate();

    switch(daysWeek){
        case 7:
            day = day + 2;
            break
        default:
            day= day + 1;
            break
    }

    if(day>daysMonth){
        day = day - daysMonth;
        if(month=12){
            month = 1;
            year = year + 1;
        } else {
            month = month + 1;
        }
    }

    return [`${day>9?day: `0${day}`}/${month>9?month: `0${month}`}/${year.toString().substr(2)}`, date];

// {day>9?day: `0${day}`}/{month>9?month: `0${month}`}/{year.toString().substr(2)}

}
 