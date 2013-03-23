Butt Minimal Music Player
===

Introduction
--

Butt minimal player helps you play HTML5 audio on the Raspberry Pi since 2013.

Borrowed some javascript code from the [Go HTML5 Player](https://github.com/nf/goplayer) but with less [pain in the butt](https://github.com/panicsteve/cloud-to-butt) so it works with the Pi without bogging it down.

INSTALL
--

Compile nginx with JSON directory listing here. 

	https://github.com/htruong/nginx

Then do 
	./configure; make; make install
	
It doesn't generate deb packages correctly yet, so someone help me changing the rules or whatever files needed please?

Then install it on your Pi. Setup whatever way you want. Then create a music directory, let's call it /f/ where you put all your files in. Then do something like this:

	location  /f/  {
		autoindex  on;
	}

Then clone the butt player somewhere accessible, change the path declaration on index.html, and [you're good to go](http://www.youtube.com/watch?feature=player_detailpage&v=Yavx9yxTrsw#t=273s).
