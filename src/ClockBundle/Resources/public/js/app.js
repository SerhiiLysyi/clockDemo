$(document).ready(function(){

    for (city in window.cities) {
        $('#clock_' + city).jClocksGMT(
            {
                title: city,
                offset: window.cities[city],
                imgpath: 'bundles/clock/'
            });
    }/*
    $('#clock_india').jClocksGMT(
        {
            title: 'New Delhi, India',
            offset: '+5.5',
            dst: false,
            timeformat: 'HH:mm',
            imgpath: 'bundles/clock/'
        });

    $('#clock_korea').jClocksGMT(
        {
            title: 'Seoul, S. Korea',
            offset: '+8',
            skin: 3,
            date: true,
            imgpath: 'bundles/clock/'
        });

    $('#clock_uk').jClocksGMT(
        {
            date: true,
            dateformat: 'YYYY/MM/DD',
            skin: 4,
            imgpath: 'bundles/clock/'
        });

    $('#clock_tokyo').jClocksGMT(
        {
            title: 'Tokyo, Japan',
            offset: '+9',
            skin: 5,
            imgpath: 'bundles/clock/'
        });
*/
});