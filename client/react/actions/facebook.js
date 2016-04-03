import clone from 'lodash/cloneDeep';
import { UserClient } from 'keinewaste-sdk';

import fetch from 'isomorphic-fetch';

function signup() {
    return function (dispatch, getState) {
        console.log('signup called');
        const state = getState();


        return new Promise((resolve, reject) => {

            const scope = {
                scope: 'email,public_profile'
            };
            FB.login((response) => {
                console.log('success login', response);
                const authInfo = response.authResponse;


                if (authInfo) {

                    fetch('/api/session', {
                        method: 'post',
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: JSON.stringify(authInfo)
                    }).then(res => { console.log(res.json()); });

                    FB.api('/me', function(profileResponse) {
                        console.log(profileResponse);
                    });
                }





                //UserClient.ModifyUser({
                //    token: response.authResponse
                //})
            }, scope);
        });
    };
}

function checkUser() {
    return function (dispatch, getState) {
        var statusChangeCallback = function (response, callback) {
            console.log('statusChangeCallback called', response);
            if (response.status === 'connected') {
                var authToken = response.authResponse.accessToken; //Save this and send at every request

                fetch('/api/session', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(response.authResponse)
                }).then(res => { console.log(res); });
            }
        };

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        })
    }
}


// default export is used in container, pushTrackingData is used in other actions
export { signup, checkUser };


/*


 {authResponse: Object, status: "connected"}
 authResponse
 :
 Object
 accessToken:"CAAYBQjWI6owBAPWQgOch2ZCVm8tCv76WHOJHMXnIVXh7Fgq6hJVaPUGTkDq8xLoRWZCf6DnBI5WiTn35Fv6yFD3JVToYhBZBp55bQn5lg4ZBuZCArxhTk2khbxHEH83081HHNKtQ1VVLV9ge2EOfSVkELKMNwlRJ3RNtdS77QdiQ7qeERZAUFQ4mvNy0ZBUHtcZD"
 expiresIn:5373,
 signedRequest:"f1HGxytWCcAYzdFzSf3FEjpNO-7FyLAgcj5mAz9jMzc.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUR4RzE3a0hYS1N3YXZMVUJJNjZ5aTJzUF9maEloVTF1UGZXelJpLU5NLVVzU01VYmVTdGxqVmN0eTRTbldWSXQtc2Y5Umx1d19fV2ZKQTBmQlNmaUhscmlhc2dsdmk1bjdDSFNNVklGb3lrVnFpcFF3czZMUXRNdElvb1VnVlNqWXJYTjBsc0haVjJOTEM3c3NtUHBWay1kMGtEREF4UXdoWHc4RTlaMXktZlR2YVE4N3lmWTN0bV80dkdlSEE1NDQ1M0ZjUDU5Q1RxVlBYM1F1eWRkcjY3a2d1LWdLM1FSMC1YYV92N3dBa3VLU2VRV0pFbVpYYklfcktFQ0lnVmNSY3o4cUtIMXRTdUlCSThUVHRZRVJqV25BOUZ1Qk0tTlJ1b191Z3Z5NjNPVGxhNHowTXlwOXlRb2QxM2FPMVRCaHg1Slh3Y0FCTl80V3lYS1A2NnJUWSIsImlzc3VlZF9hdCI6MTQ1OTY0NzAyNywidXNlcl9pZCI6Ijk5OTQ0NjMwMDEwOTY0OSJ9"
 userID:"999446300109649"

 status:"connected"
 */