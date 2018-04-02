const defaultState = { bands: [] };
let id = 0;

export default function manageBand(state = defaultState, action) {
	switch (action.type) {
		case 'ADD_BAND':
			id += 1;
			const band = { ...action.band, id: id };
			return { bands: [...state.bands, band] };
		case 'DELETE_BAND':
			const bands = state.bands.filter(b => b.id !== action.id);
			return { bands };
		default:
			return state;
	}
}
