export interface IPrevState {
	email: string;
	nickName: string;
	password: string;
	tel: string;
	result?: boolean;
}

export interface IFormData extends IPrevState {
	errors: { [key: string]: string };
}

export interface IEmailAuthPrevState {
	code: string;
	email: string;
}
