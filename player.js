function LoaPhuong(player) {
	this.playlist = [];
	this.player = player;
	this.player.onended = this.next;



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
		if (this.playlist.length > 0) {
			var songid = Math.floor(Math.random() * this.playlist.length);
 			this.player.src = this.playlist[songid];
 			this.player.play();
		}
	};

	this.play = function() {
		this.next();
		this.player.play();
	};
}