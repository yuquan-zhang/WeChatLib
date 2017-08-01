const CONFIG = {
  appid: "wxdc02ed9004592908",
  secret: "2ecd9ee0f11b5444292317b8ef821c98"
}

function getMetrics(data) {
  var fetch = require('node-fetch');
  let uri = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${CONFIG.appid}&secret=${CONFIG.secret}`
  console.log('uri', uri)
  fetch(uri, {
    method: 'GET'
    })
    .then(function(res) {
      return res.json();
    }).then(function(body) {
    //console.log(body);
    var times = Object.create(null);
    times.begin_date = data.begin_date;
    times.end_date = data.end_date;
    var dates = JSON.stringify(times);
    fetch('https://api.weixin.qq.com/' + data.api + '?access_token=' + body.access_token,{ method: 'POST', body: dates})
      .then(function(res) {
        return res.json();
      }).then(function(body) {
        console.log(body);
      });
    });
}

exports.getMetrics = getMetrics;
