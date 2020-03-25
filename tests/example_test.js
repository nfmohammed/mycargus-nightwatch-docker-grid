
var nightwatchConfig = require('../nightwatch.json');

// EXAMPLE ONLY:

module.exports = {
  'Nightwatch.js Test' : function (browser) {
    console.log('Nightwatch test started');

    browser
      .url(nightwatchConfig.test_settings.default.launch_url)
      .waitForElementVisible('.hnname', 10000)
      .assert.containsText('.hnname', 'Hacker News')
      .saveScreenshot('/home/docker/app/tests_output/screenshots/test.png')
      .end();

    console.log('Nightwatch test finished');
    console.log('¸¸♬·¯·♩¸¸♪·¯·♫¸¸Happy Dance¸¸♬·¯·♩¸¸♪·¯·♫¸¸');
  }
};
