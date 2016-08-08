import clone from 'lodash/cloneDeep';
import ConsultantApi from 'client/sdk';
import cookie from 'react-cookie';
import map from 'lodash/map'
import fetch from 'isomorphic-fetch';

const Consultants = ConsultantApi.Consultants();

function requestOverview(data) {
    return (dispatch, getState) => {

        Consultants.GetAll({
            date: data.date
        }, function(err, data) {
            if (err) {
                console.log('get consultants failed', err);
            }
            console.log ('setting data', data);
            dispatch({ consultantsList: data });
        })

    }
}

export { requestOverview };
