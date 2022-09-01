const $post = function(url) {
    return new Promise((resolve, reject) => {
        function handler() {
            if(this.readyState !== 4) return
            if(this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest()
        client.open("post", url)
        client.onreadystatechange = handler
        client.responseType = "json"
        client.setRequestHeader("Accept", "application/json")
        client.send()
    })
}
$post('/getUserInfo').then(user => {
    console.log(user)
})

