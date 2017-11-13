// SpaceAPI
var doorURL = 'https://hamburg.ccc.de/dooris/status.json';

// This function checks spaceapi to see if CCCHH is open
function checker() {
    $.ajax({
         type: 'GET',
         url: doorURL,
         dataType: 'json',

         success: function(data) {
             if (data.state.open) {
                 chrome.browserAction.setTitle({title: 'Z9 is open with ' + (data.state.message).replace(/\D/g, '') + ' hackers'});
                 chrome.browserAction.setIcon({path: 'icons/openz9-32.png'});
                 chrome.browserAction.setBadgeText({text: (data.state.message).replace(/\D/g, '')});
                 chrome.browserAction.setBadgeBackgroundColor({color: '#808080'});
             } else {
                 chrome.browserAction.setTitle({title: 'Z9 is closed'});
                 chrome.browserAction.setIcon({path: 'icons/z9-32.png'});
                 chrome.browserAction.setBadgeText({text: ''});
             }
         }
     });
}

// This calls checker at start and every 15 minutes
checker();
setInterval(checker, 15 * 60 * 1000);
