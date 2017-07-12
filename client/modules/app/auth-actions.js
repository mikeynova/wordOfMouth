export const FIRST_ERROR = 'FIRST_ERROR';
export const LAST_ERROR = 'LAST_ERROR';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const REPEAT_PASSWORD_ERROR = 'REPEAT_PASSWORD_ERROR';

export function firstNameError(data) {
	 return {
    type: FIRST_ERROR,
    payload: data
  }
}

export function lastNameError(data) {
	return {
		type: LAST_ERROR,
		payload: data
	}
}

export function emailError(data) {
	return {
		type: EMAIL_ERROR,
		payload: data
	}
}

export function passwordError(data) {
	return {
		type: PASSWORD_ERROR,
		payload: data
	}
}

export function repeatPasswordError(data) {
	return {
		type: REPEAT_PASSWORD_ERROR,
		payload: data
	}
}