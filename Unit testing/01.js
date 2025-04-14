function slove(obj) {
    const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPattern = /^[/\w.]+$/; // Fixed regex
    const validVersion = ["HTTP/0.9", "HTTP/1.1", "HTTP/2.0"];
    const specialChar = ["<", ">", "\\", "&", "'", '"'];

    if (!validMethod.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || (!obj.uri.match(uriPattern) && obj.uri !== "*")) {
        throw new Error(`Invalid request header: Invalid Uri`);
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (obj.message === undefined || obj.message === null) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    if(!obj.hasOwnProperty("message")){
        throw new Error (`Invalid rrequest header: Invalid Message`);
    }

    for (let el of obj.message) {
        if (specialChar.includes(el)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }

    return obj;
}

slove({

    method: 'GET',
    
    uri: 'svn.public.catalog',
    
    version: 'HTTP/1.1',
    
    message: ''
    
    })