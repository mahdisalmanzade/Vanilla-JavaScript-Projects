/*
The load event is fired when the whole page has loaded, 
including all dependent resources such as stylesheets and images.
This is in contrast to DOMContentLoaded, 
which is fired as soon as the page DOM has been loaded, 
without waiting for resources to finish loading.
 */

// This event does make sense when your internet connection is slow(3G)

window.addEventListener('DOMContentLoaded', function () {
  const img = this.document.querySelector('img');
  console.log(img);
  console.log(img.width);
  console.log(
    'The whole page has loaded,including all dependent resources such as stylesheets and images. '
  );
});

window.addEventListener('load', function () {
  const img = this.document.querySelector('img');
  console.log(img);
  console.log(img.width);
  console.log(
    'The whole page has loaded,including all dependent resources such as stylesheets and images. '
  );
});
