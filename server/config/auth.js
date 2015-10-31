/**
 * Created by HUQ on 10/28/15.
 */
module.exports = {

  'googleAuth' : {
    'clientID'      : '23518994146-bvr16pv83u17q2ocic4ehfmfvcai8hc4.apps.googleusercontent.com', // your App ID
    'clientSecret'  : 'rIUa6fNCKColZ6QfZ488vLrI', // your App Secret
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  },

  'twitterAuth' : {
    'consumerKey'       : 'hVyyNKvfTziXIUn0LotMh0XkF',
    'consumerSecret'    : 'gDf6Bd2Llb8cbrhQch295p6Tph8hQs0rQsQqy2j7L4kOJ5G1Zv',
    'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
  },

  'facebookAuth' : {
    'clientID'      : 'your-secret-clientID-here',
    'clientSecret'  : 'your-client-secret-here',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

};