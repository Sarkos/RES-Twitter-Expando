// ==UserScript==
// @name           RES Twitter Expando
// @description    Loads the Twitter Widgets javascript file for use with RES in Firefox
// @include        *reddit.com/*
// @author         Sarkos
// @require        https://platform.twitter.com/widgets.js
// @grant          none
// ==/UserScript==

var siteTable = document.getElementById('siteTable');
if (siteTable) {
	new MutationObserver(function() {
		twttr.widgets.load();
	}).observe(siteTable.parentNode, { childList:true, subtree:true });
}
