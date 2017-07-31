var WeChatLib = require('./WeChatLib');
WeChatLib.getMetrics({
  api: 'datacube/getusersummary',
  "begin_date": "2017-06-02",
  "end_date": "2017-06-07"
})
