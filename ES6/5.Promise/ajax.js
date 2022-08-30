const getHttp = function(url) {
    const promise = new Promise((resolve, reject) => {
        const handler = function() {
            if(this.readyState !== 4) {
                return
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest()
        client.open("GET", url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader("Accept", "application/json")
        client.send()
    })

    return promise
}

getHttp("/test.json").then((res) => {
    console.log('res',res)
}, (error) => {
    console.log('error',error)
})