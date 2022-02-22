fetch('https://d5tw4tn8w92v8.cloudfront.net/fGg4HQHdsEux7qLgQmCfH9vz')
  .then(res => res.blob()) // Gets the response and returns it as a blob
  .then(blob => {
  console.log( "BLOB: ", blob)
    // Here's where you get access to the blob
    // And you can use it for whatever you want
    // Like calling ref().put(blob)

    // Here, I use it to make an image appear on the page
    let objectURL = URL.createObjectURL(blob);
    let myImage = new Image();
    myImage.src = objectURL;
});
function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://d5tw4tn8w92v8.cloudfront.net/fGg4HQHdsEux7qLgQmCfH9vz', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
              console.log("11111111 ", request);
                return request.responseText;
            } else{
              console.log("22222222222 ", request);

            }
        }
    }
}
getText()