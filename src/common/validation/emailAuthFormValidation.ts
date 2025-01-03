'use server';

import emailAuthentication from '../services/emailAuthentication';
import { IEmailAuthPrevState } from '../types/formValidation.interface';

export const submitAction = async (prevState: IEmailAuthPrevState, formData: FormData) => {
	const code = (formData.get('code') as string) || '';
	const email = prevState.email;

	emailAuthentication({ code, email });
	return { code, email };
};
