let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {...action.band, id: ++id}
      return { bands: state.bands.concat(band) }
      break;
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.id)}
      break;
    default:
      return state;
  }
};
