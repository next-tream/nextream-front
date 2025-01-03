'use client';

import { useFormState } from 'react-dom';
import BaseModal from '@/common/components/Modals/BaseModal';
import { submitAction } from '@/common/validation/signupFormValidation';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { useRouter } from 'next/navigation';

export default function SignUpModal() {
	const router = useRouter();
	const [formData, setFormData] = useFormState(submitAction, {
		email: '',
		nickName: '',
		password: '',
		tel: '',
		errors: {},
		result: false,
	});

	if (formData.result) {
		router.push(`/kakaoAuth?email=${formData.email}`);
	}

	return (
		<form action={setFormData}>
			<BaseModal type="signUp">
				<TextInputsWrapper type="signUp" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
