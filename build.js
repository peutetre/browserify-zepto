var HTTP = require("q-io/http"),
    FS = require("q-io/fs");

HTTP.read('https://raw.github.com/peutetre/zepto/1.1.2/zepto.js')
    .then(function (body) {
        return FS.write("./index.js", body.toString().replace(/var Zepto =/, 'var Zepto = module.exports ='));
    })
    .fail(function(err){
        console.log(err);
    });
