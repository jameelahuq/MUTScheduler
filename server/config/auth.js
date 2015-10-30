/**
 * Created by HUQ on 10/28/15.
 */
module.exports = {

  'facebookAuth' : {
    'clientID'      : '23518994146-bvr16pv83u17q2ocic4ehfmfvcai8hc4.apps.googleusercontent.com', // your App ID
    'clientSecret'  : 'rIUa6fNCKColZ6QfZ488vLrI', // your App Secret
    'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey'       : 'your-consumer-key-here',
    'consumerSecret'    : 'your-client-secret-here',
    'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID'      : 'your-secret-clientID-here',
    'clientSecret'  : 'your-client-secret-here',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

};