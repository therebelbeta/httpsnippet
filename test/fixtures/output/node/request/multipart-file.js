var request = require("request");

var fs = require("fs");
request({
  "method": "POST",
  "url": "http://mockbin.com/har",
  "headers": {
    "Content-Type": "multipart/form-data"
  },
  "formData": {
    "foo": {
      "value": fs.createReadStream("test/fixtures/files/hello.txt"),
      "options": {
        "filename": "hello.txt",
        "contentType": "text/plain"
      }
    }
  }
}, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

