class Request {
    constructor (merhod, uri, version, message){
        this.method = merhod;
        this.uri = uri;
        this.version = version;
        this.message = message;

        this.response = undefined;
        this.fulfilled = false;
    }
}
let myData = new Request('GET',

    'http://google.com', 'HTTP/1.1', '')
    
    console.log(myData);