
export var url = "http://localhost:3000/"

//http://localhost:3000/
//http://192.168.0.22:3000/

export function httpRequest(handler, method, body, callback) {
    const http = new XMLHttpRequest()
    http.responseType = 'json'

    http.open(method, url + handler, true)

    if (body != null) {
        http.setRequestHeader('Content-Type', 'application/json')
    }
    http.onload = function () {
        callback(http.response)
    }

    http.send(JSON.stringify(body))
}


