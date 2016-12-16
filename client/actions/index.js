import axios from 'axios';

export const TOP_ARTISTS = 'TOP_ARTISTS';

export function getArtists() {
	console.log('inside actions/index.js')
	 return {
    type: TOP_ARTISTS,
    payload: ['random', 'data', 'inside']
  };
}