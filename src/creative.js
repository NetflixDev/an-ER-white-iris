/**
 * This animation preset uses ff0000-ad-tech/ad-canvas package to animate canvas-rendered elements
 * See here for more details: https://github.com/ff0000-ad-tech/ad-canvas
 */
var Creative = function() {
  this.play = function() {
    console.log('Creative.play()');

    var irisDelay = 0.5;
    var irisTime = 3.0;
    var irisLen = Math.max(adParams.adWidth, adParams.adHeight);
    View.endFrame.iris.tween.to(View.endFrame.iris.circle, irisTime, {
      delay: irisDelay,
      scale: irisLen * 0.05,
      ease: Power2.easeOut
    });
    View.endFrame.iris.tween.start();

    var logoDelay = irisDelay + Creative.irisOffscreenAnimPercent * irisTime;
    TweenLite.delayedCall(logoDelay, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// percentage of iris animation that has to elapse before content underneath is completely visible
Creative.irisOffscreenAnimPercent = 0.3;
Creative.usesCanvasIris = true;
Creative.irisColor = 'white';

// how long zoom animates for (in seconds)
Creative.zoomDuration = 1.7;

// how much to scale the keyart intro frame
Creative.zoomAmount = 5;
