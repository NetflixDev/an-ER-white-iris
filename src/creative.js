// time to delay start of iris animation (in seconds)
var irisDelay = 0.5;

// how long iris expansion lasts
var irisDuration = 2;

// color of iris screen
var irisColor = 'white';

// how long zoom animates for (in seconds)
var zoomDuration = 1.7;

// how much to scale the keyart intro frame
var zoomAmount = 5;

/**
 * This animation preset uses ff0000-ad-tech/ad-canvas package to animate canvas-rendered elements
 * See here for more details: https://github.com/ff0000-ad-tech/ad-canvas
 */
var Creative = function() {
  // percentage of iris animation that has to elapse before content underneath is completely visible
  var irisOffscreenAnimPercent = 0.3;
  this.play = function() {
    console.log('Creative.play()');

    var irisLen = Math.max(adParams.adWidth, adParams.adHeight);
    View.endFrame.iris.tween.to(View.endFrame.iris.circle, irisDuration, {
      delay: irisDelay,
      scale: irisLen * 0.05,
      ease: Power2.easeOut
    });
    View.endFrame.iris.tween.start();

    var logoDelay = irisDelay + irisOffscreenAnimPercent * irisDuration;
    TweenLite.delayedCall(logoDelay, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// indicates whether to use canvas-rendered iris
Creative.usesCanvasIris = true;

// attaching to Creative class since container looks there for intro zoom properties
Creative.zoomDuration = zoomDuration;
Creative.zoomAmount = zoomAmount;
// also for iris color
Creative.irisColor = irisColor;
