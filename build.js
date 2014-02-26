var HTTP = require("q-io/http"),
    FS = require("q-io/fs");

HTTP.read('https://raw.github.com/peutetre/zepto/1.1.3/zepto.js')
    .then(function (body) {
        var rslt = body.toString()
                    .replace(/var Zepto =/, 'var Zepto = module.exports =')
                    .replace(/window.Zepto = Zepto/, '')
                    .replace(/window.\$ === undefined && \(window.\$ = Zepto\)/, '');

        return FS.write("./index.js", rslt);
    })
    .fail(function(err){
        console.log(err);
    });
