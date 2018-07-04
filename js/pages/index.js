import { Utils } from '../modules/utils'

class Index{
	constructor(){
		console.log('Start Index')
		this.util = new Utils()
		this.checkEmpty()
		this.getJson()
	}
	checkEmpty(){
		console.log(this.util.isEmpty('Testing'))
	}
	getJson(){
		this.util.fetch('http://api.icndb.com/jokes/random')
		.then(data => { console.log(data) })
	}
}

new Index()