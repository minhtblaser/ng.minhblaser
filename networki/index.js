function diCho () {
    return new Promise ( function (resolve, reject ) {
        console.log ("dang di cho")
        resolve ("Khongcothitheo")
    })
}


diCho ().then (function(item){
    console.log (item)
}).catch (function (err) {
    console.log (err)
})

