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
	new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var cn = mutation.target.className;
			if (cn && (cn.indexOf('res-media-host-twitter') != -1 || cn.indexOf('res-expando-box') != -1)) {
				twttr.widgets.load();
			}
		});
	}).observe(siteTable.parentNode, { childList:true, subtree:true });
}
