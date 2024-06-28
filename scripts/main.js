'use strict';


// need to resize iframes based on the amount of
// content it has:

let resizeIframe = (iframe) => {
    // iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
    console.log(iframe.contentWindow);
    console.log("resized!");
}