module.exports = (message) =>{
    if (message.slice(0,1) === '!') {
        return message.slice(1)
    }
}