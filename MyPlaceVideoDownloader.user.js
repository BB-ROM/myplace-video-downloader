// ==UserScript==
// @name         Strath MyPlace Video Downloader
// @version      0.0.1
// @description  Enables a download button on the embedded Planet eStream player
// @author       nom de plume
// @match        https://*.strath.ac.uk/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// @icon         https://www.strath.ac.uk/media/1newwebsite/favicon/xfavicon-32x32.png,q20180627.pagespeed.ic.ArMLRgV3Iv.webp

// ==/UserScript==

(function() {
    'use strict';

    var origin = window.location.origin;

    var pd = $("#hdn_PlayerData")

    if (pd.length) {
        var player_data = JSON.parse(pd.val());
        var media_url = origin + player_data.Playlist[0].MediaURL;
        var title = player_data.Playlist[0].Title
        var downloadlink = $(".downloadlink")
        downloadlink.css("display", "block");
        downloadlink.attr("download", title);
        downloadlink.attr("href", media_url);
    }
})();