1911 Player
===

Introduction
--

1911 player -- playing HTML5 audio on the Raspberry Pi or any recent NGINx installation.

Borrowed some javascript code from the [Go HTML5 Player](https://github.com/nf/goplayer) and with some json magic. No special installation of any dynamic module is needed for this scheme to work.

INSTALL
--

Just install any Nginx version past 1.7.9. Then shove all your mp3 files into a directory, then configure nginx to list the directory structure as JSON.

	location /my_mp3_stash/ {
		autoindex on;
		autoindex_format json;
	}

Then clone the 1911 player somewhere accessible, change the path declaration on index.html, and [you're good to go](http://www.youtube.com/watch?feature=player_detailpage&v=Yavx9yxTrsw#t=273s).
