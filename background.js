chrome.app.runtime.onLaunched.addListener(function() {
  // width 640 for font size 12
  //       720 for font size 14
  chrome.app.window.create('main.html', {
	 height: 700,
	    width: 1000,
	    top: 100,
	    frame: 'chrome'
  });
});
