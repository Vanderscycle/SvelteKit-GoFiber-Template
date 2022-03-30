export interface NavigationButton {
	url: string;
	name: string;
}

export interface BlogPost {
	title: string;
	author: string;
	mainText: string;
}

export interface Locals {
	user?: {
		issuer: string;
		publicAddress: string;
		email: string;
	};
}
