export const FIRST_ERROR = 'FIRST_ERROR';

export function firstNameError(data) {
	 return {
    type: FIRST_ERROR,
    payload: data
  }
}