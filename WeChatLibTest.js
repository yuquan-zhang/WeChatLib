var WeChatLib = require('./WeChatLib');
WeChatLib.getMetrics({
  api: 'datacube/getusersummary',
  "begin_date": "2017-07-01",
  "end_date": "2017-07-07"
})
