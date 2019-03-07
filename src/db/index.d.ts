export interface Options {
	name: string,
	hostname?: string,
	port?: string,
	auth?: Auth,
	suffix?: string,
	logger?: Function 
}
export interface Auth {
	username?: string,
	password?: string 
}
export type Collection = string[]