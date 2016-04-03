import clone from 'lodash/cloneDeep';
import KeineWaste from 'keinewaste-sdk';
import cookie from 'react-cookie';
import map from 'lodash/map'

const Autocomplete = KeineWaste.Autocomplete();
const Market = KeineWaste.Market();
import fetch from 'isomorphic-fetch';

export const SET_FOODLIST = 'SET_FOODLIST';


function convertToStrings(data) {
    return map(data, (product) => product.title);
}
function requestFood(value) {
    return (dispatch, getState) => {

        Autocomplete.Autocomplete({
            'query': value
        }, function (error, data) {
            if (error) {
                console.log('error autocomplete');
                return;
            }


            const foodList = convertToStrings(data);


            dispatch({ type: SET_FOODLIST, foodList: foodList });
        });
    }
}


function requestCreateOffer(data) {
    return (dispatch, getState) => {

        const token = cookie.load('accessToken');

        Market.CreateOffer({
            token: token,
            deliveryType: data.deliveryType, //'pickup' || 'delivery',
            distance: Number(data.deliveryArea) || 10000, //123123, //in meters
            categories: data.categories, //[1, 2, 3], //ids of categories
            description: '', // not used
            products: data.foodList.map(food => {
                return {
                    imageUrl: "https://espngrantland.files.wordpress.com/2015/07/minions_bananas.jpg",
                    quantity: food.quantity,
                    title: food.name
                }
            }),
            meetingTime: data.deliveryTime
        }, function(err, data) {
            if (err) {
                console.log('create offer failed', err);
            }

            window.location.href = '/donate/step2';
        })
    }
}





//                UserClient.ModifyUser({  // not used
//                    token: response.authResponse,
//                    address: 'text_field', // from google autocomplete
//                    companyName: 'company_name', // not used
//                    bio: 'textfield', // not used
//                    type: 'receiver' || 'donor',
//                    // id type == 'receiver'
//                    deliveryType: 'pickup' || 'delivery',
//                    distance: 123123, //in meters
//                    categories: [1,2,3], //ids of categories
//                    meetingTimeFrom: '2016-04-03 15:00:00',
//                    meetingTimeTo: '2016-04-03 15:00:00'
//                })
//
//                Autocomplete.Autocomplete({
//                    query: 'query'
//                })
//
//                Categories.GetAll({}) // we can mock it
//
//                Market.CreateOffer({
//                    deliveryType: 'pickup' || 'delivery',
//                    distance: 123123, //in meters
//                    categories: [1,2,3], //ids of categories
//                    description: '', // not used
//                    products: [ // this section comes from autocomplete
//                        {
//                            "imageUrl" : "https://espngrantland.files.wordpress.com/2015/07/minions_bananas.jpg",
//                            "quantity" : "2pcs", // not used
//                            "title" : "my bananas"
//                        },
//                        {
//                            "title" : "Potatas",
//                            "quantity" : "10kg", // not used
//                            "imageUrl" : "http://www.potatoes.com/files/5713/4202/4172/07.jpg"
//                        }
//                    ],
//                    meetingTime: '2016-04-03 15:00:00'
//                })


// default export is used in container, pushTrackingData is used in other actions
export { requestFood, requestCreateOffer };
