function LoaPhuong(player) {
	this.playlist = [];
	this.player = player;

	this.populate = function(files, basepath) {
		for (var i = 0; i < files.length; i++) {
			//console.log("adding " + i);
			element = files[i];
			var dir = (element.type == "directory");

			if (dir) {
				this.load(basepath + element.name + "/");
			} else {
				//console.log(this);
				this.playlist.push(basepath + element.name);
			}
		}
	};


	this.load = function(path)  {
		var parent = this;
		$.ajax({
			type: "GET",
			url: path,
			dataType: "json",
			success: function(data) {
				parent.populate(data, path);
			}
		});
	};

	this.next = function() {
		var playlist = this.playlist;
		if (playlist.length > 0) {
			var songid = Math.floor(Math.random() * playlist.length);
 			this.player.src = playlist[songid];
 			this.player.play();
		}
	};

	this.play = function() {
		this.next();
		this.player.play();
	};
}