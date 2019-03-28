/**
 * This animation preset uses ff0000-ad-tech/ad-canvas package to animate canvas-rendered elements
 * See here for more details: https://github.com/ff0000-ad-tech/ad-canvas
 */
var Creative = function() {
  this.play = function() {
    console.log('Creative.play()');

    var irisDelay = 0.5;
    var irisTime = 2;
    var irisLen = Math.max(adParams.adWidth, adParams.adHeight);
    View.endFrame.iris.tween.to(View.endFrame.irisCircle, irisTime, {
      delay: irisDelay,
      scale: 15,
      ease: Power2.easeOut
    });
    View.endFrame.iris.tween.start();

    var delay = -1.5 + irisDelay + irisTime;
    TweenLite.delayedCall(delay, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

Creative.irisColor = 'white';
