export interface IPrevState {
	email: string;
	nickName: string;
	password: string;
	tel: string;
	result?: boolean;
}

export interface ILoginPrevState {
	password: string;
	email: string;
	errors: { [key: string]: string };
}

export interface IFormData extends IPrevState {
	errors: { [key: string]: string };
}

export interface IEmailAuthPrevState {
	code: string;
	email: string;
}
