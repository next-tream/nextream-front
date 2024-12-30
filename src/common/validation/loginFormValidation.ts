'use server';

import { ZodError } from 'zod';
import { ILoginPrevState } from '../types/formValidation.interface';
import { schema } from '../zod/loginSchema';

export const submitAction = async (prevState: ILoginPrevState, formData: FormData) => {
	try {
		const password = (formData.get('password') as string) || '';
		const email = (formData.get('email') as string) || '';

		const finalData = {
			password,
			email,
		};

		schema.parse(finalData);

		return { ...finalData, errors: {} };
	} catch (error) {
		if (error instanceof ZodError) {
			const fieldErrors = error.errors.reduce(
				(acc, cur) => {
					const field = cur.path[0];
					acc[field] = cur.message;
					return acc;
				},
				{} as Record<string, string>,
			);
			return { ...prevState, errors: fieldErrors };
		}
		return { ...prevState };
	}
};