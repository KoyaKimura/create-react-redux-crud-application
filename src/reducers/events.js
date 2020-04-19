import _ from 'lodash';

import { READ_EVNETS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVNETS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}