const generateToken = () => {
    const obj = Math.random().toString(36).substring(2)
    return obj
}

module.exports = {
    generateToken
}