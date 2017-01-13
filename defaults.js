getQueryVariable = function(variable) {
	var query = window.location.hash;
	if (query.split("?").length < 2) 
		return null;

	var vars = query.split("?")[1].split("&");

	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (decodeURI(pair[0]) == variable) {
			return decodeURI(pair[1]);
		}
	}

	return null;
};

var music_path = getQueryVariable("path") || "/~jimmies/music/";
