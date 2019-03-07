import { MongoClient, Db } from "mongodb"
import { Collection, Options, Auth } from "./index"
import { localRequire, Timer } from "../utils"
import Logger from "../logger"
const mongoDB = localRequire("mongodb")
const timer = new Timer()
class Mongo {
	_collections: Collection
	collections: object
	client: MongoClient
	db: Db
	name: string

	constructor( { name = "default", hostname = "localhost", port = "27017", auth = {}, suffix = "", logger = new Logger() }: Options, ...collections: Collection ) {
		this.name = name
		this._collections = [ ...collections ]
		this.collections = {}
		timer.start()
		this._createDB( hostname, port, suffix, auth)
		timer.stop
	}

	_createDB( hostname: string, port: string, suffix: string, { username: usr, password: pwd }: Auth ) {
		let baseurl = `${ hostname }:${ port }`
		let prefix = this._vAuth( usr, pwd ) ? "" : `${ usr }:${ pwd }@`
		let url = `mongodb://${ prefix }${ baseurl }/${ suffix }`
		mongoDB.connect(url, { useNewUrlParser: true }, ( error: any, client: any ) => {
			if ( error ) {
				console.log( error )
				//throw new Error()
			}
			this.client = client
			this.db = client.db(this.name)
			for (let collection of this._collections) {
				this.collections[collection] = this.db.collection(collection)
			}
		})
	}

	_vAuth( username: string, password: string ) {
		return (new Boolean( username )) && (new Boolean( password ))
	}

	addItem( data: object, collection: string = this._collections[0] ) {
		this.collections[collection].insertOne( data )
	}
}

export default Mongo