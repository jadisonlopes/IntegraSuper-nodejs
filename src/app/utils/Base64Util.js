class Base64Util {
    recuperar(arrayBuffer) {
        return Buffer.from(arrayBuffer).toString('base64');
    }
}

export default new Base64Util(); 