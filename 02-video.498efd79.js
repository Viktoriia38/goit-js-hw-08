!function(){const e=new Vimeo.Player("vimeo-player"),t="videoplayer-current-time",o=localStorage.getItem(t);e.on("timeupdate",_.throttle((function({seconds:e}){localStorage.setItem(t,e)}),1e3)),o&&e.setCurrentTime(o)}();
//# sourceMappingURL=02-video.498efd79.js.map
