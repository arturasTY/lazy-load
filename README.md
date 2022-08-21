![Untitled-2](https://user-images.githubusercontent.com/30295076/185798951-a8e1316c-3f91-4f55-a4d4-0e4b7302a67d.jpg)

# Lazy Loading Images using Js & Intersection Observer

Large image size or slow connection speeds may mean that user is presented with a blank screen until images load, hence it is better to present a blurry image to inform the user that something is happening in the background.

The strategy here is to load a low-resulotion (blurry) image first and then update it's **src** to the full-resolution image. This reduces the image size significantly, hence improving loading-speeds & performance. The second part is to only load the full-resolution image when user scrolls to it (or it's in viewport). User may never scroll to the bottom of the page, hence there's no need to request all the images on page load.
