let id = 0;

export default function manageBand(
	state = {
		bands: []
	},
	action
) {
	switch (action.type) {
		case "ADD_BAND":
			return { bands: [...state.bands, { text: action.band.text, id: ++id }] };
		case "DELETE_BAND":
			const filteredBands = state.bands.filter(band => band.id !== action.id);
			return { bands: filteredBands };
		default:
			return state;
	}
}
