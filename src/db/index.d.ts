export interface Options {
	name: string,
	hostname?: string,
	port?: string,
	auth?: Auth,
	suffix?: string
}
export interface Auth {
	username?: string,
	password?: string 
}
export type Collection = string[]