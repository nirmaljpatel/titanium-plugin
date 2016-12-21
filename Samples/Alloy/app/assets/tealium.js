var Tealium = {};

if (Ti.Platform.name == "android") {
	Tealium = require('com.tealium.appcelerator.android');
} else if (Ti.Platform.name == "iPhone OS") {
	Tealium = require('com.tealium.appcelerator.ios');
	exports.initialize = function(accountName, profileName, environment, isRelease) {
		Tealium.enableWithOptions(accountName, profileName, environment, isRelease);
	};
	exports.trackView = function(viewName, data) {
		data = data || {};
		if(viewName) {
			data.screen_title = viewName;	
		}
		Tealium.trackViewWithData(data);
	};
	exports.trackEvent = function(eventName, data) {
		data = data || {};
		if(eventName) {
			data.link_id = eventName;
		}
		Tealium.trackEventWithData(data);
	};
} else {
	exports.initialize = function(accountName, profileName, environment, isRelease) {
		Ti.API.warn("Tealium plugin does not support " + Ti.Platform.name);
	};
	exports.trackView = function(viewName, data) {
		Ti.API.warn("Tealium plugin does not support " + Ti.Platform.name);
	};
	exports.trackEvent = function(eventName, data) {
		Ti.API.warn("Tealium plugin does not support " + Ti.Platform.name);
	};
}
