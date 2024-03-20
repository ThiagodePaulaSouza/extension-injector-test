if ((typeof browser) == "undefined")
{
    var browser = chrome
}

browser.webRequest.onCompleted.addListener(function(details) {
    console.log(`which is the url?\n${details.url}`)
    console.log(`which is the statusCode?\n${details.statusCode}`)
}, {
urls: ["<all_urls>"],
});