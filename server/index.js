const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static('client/'));

app.use('/client/index.js', express.static('client/index.js'));

app.use('/client/app.module.js', express.static('client/app.module.js'));

app.use('/client/app.component.js', express.static('client/app.component.js'));

app.use('/node_modules', express.static('node_modules/'));

const port = process.env.PORT || 4657;

$.get('http://www.bestofneworleans.com/gambit/Rss.xml?section=1222783', function (data) {
    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        console.log("title      : " + el.find("title").text());
        console.log("link     : " + el.find("link").text());
        console.log("description: " + el.find("description").text());
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})