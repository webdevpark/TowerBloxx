	function jsOnLoad() {
		//if(!checkIEVersion()) return;
		if(ig.ua.android) {
			window.scrollTo(0,8);
		} else {
			setTimeout(function(){window.scrollTo(0,0);},1);
		}
	}
	
	function getInternetExplorerVersion()
	// Returns the version of Windows Internet Explorer or a -1
	// (indicating the use of another browser).
	{
	   var rv = -1; // Return value assumes failure.
	   if (navigator.appName == 'Microsoft Internet Explorer')
	   {
	      var ua = navigator.userAgent;
	      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	      if (re.exec(ua) != null)
	         rv = parseFloat( RegExp.$1 );
	   }
	   return rv;
	}

	function checkIEVersion()
	{
	   var ver = getInternetExplorerVersion();
	   if ( ver> -1 )
	   {
	      if ( ver== 8.0 ){
	      	  msg = "You're using Windows Internet Explorer 8.";
	      	  alert(msg);
	      	  return false;
	      }
	      else if ( ver == 7.0 )
	      {
	      	 msg = "You're using Windows Internet Explorer 7.";
	      	 alert(msg);
	    	 return false;
	      }
	      else if ( ver == 6.0 ){
	    	  msg = "You're using Windows Internet Explorer 6.";
	    	  alert(msg);
	    	  return false;
	    	  
	    	}
	      else
	      {
	    	  msg = "You should upgrade your copy of Windows Internet Explorer";
	    	return true;
	       }
	   }
		
	}

	function createLoopEffect(id, url)
	{
		var s = soundManager.createSound({
			id: id,
			url: url,
			volume: 50,
			autoPlay: true,
			autoLoad: true,
			onfinish: function() 
			{
				s.play();
			}
		});
	}

	function createEffect(id, url)
	{
		soundManager.createSound({
			id: id,
			url: url,
			volume: 100,
			autoLoad: true,
		});
	}
	function playEffect(id, url) 
	{
		console.log(id + "complete play!");
		//soundManager.stopAll();
		//soundManager.setPosition(id, 0);
		soundManager.play(id, url);
	}	
	function playFromTo(id, nFrom, nTo) {		
	  	g_soundArray[id].play({
	    from: nFrom,
	    to: nTo,
	    onstop: function() {
			console.log("complete play!");
	    }
	  });	  
	}	
	function fireSound(id) {
	  	g_soundArray[id].play;	  	 
	}	
	function jsOnSound() 
	{
		if(ig.game != null)
		{		
			ig.game.updateKeyEvent1();
		}
	}
	

	
