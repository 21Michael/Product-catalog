import axios from 'axios';

export default class Axios {
    constructor(method, url, data =false) {
    	this._method = method;
        this._url = url;
        this._data = data;
    }
    send(onSucces = false, onError = false) {
        axios[this._method](this._url, this._data)
            .then(response => {
            	onSucces ? onSucces(response): console.log(response);
            })
            .catch(error => {
            	 onError ? onError(error): console.log(error);
            })
    }
}