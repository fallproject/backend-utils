import { MongoClient, Db } from "mongodb"
import { Collection, Options, Auth } from "./index"

class Mongo {
	_collections: Collection
	collections: object
	client: MongoClient
	db: Db

	constructor( { name = "default", hostname = "localhost", port = "27017", auth = {}, suffix = "" }: Options, ...collections: Collection ) {
		this._collections = [ name, ...collections ]
		this.collections = {}
		this._createDB( hostname, port, suffix, auth )
	}

	_createDB( hostname: string, port: string, suffix: string, { username: usr, password: pwd }: Auth ) {
		let baseurl = `${ hostname }:${ port }`
		let prefix = this._vAuth( usr, pwd ) ? "" : `${ usr }:${ pwd }@`
		let url = `mongodb://${ prefix }${ baseurl }/${ suffix }`
		MongoClient.connect( url, ( err, client ) => {
			if ( err ) {
				console.log( err )
				//throw new Error()
			}
			this.client = client
			this.db = client.db()
			for (let collection in this.collections) {
				this.collections[collection] = this.db.collection(collection)
			}
		})
	}

	_vAuth( username: string, password: string ) {
		return (new Boolean( username )) && (new Boolean( password ))
	}

	addItem( data: object, collection: string = this._collections[0] ) {
		this.collections[collection].addOne( data )
	}
}

export default Mongo