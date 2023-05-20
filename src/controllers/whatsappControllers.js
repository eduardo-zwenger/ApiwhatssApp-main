

const verifyToken = (req, res) => {
    var accessToken = "ASDFSDFSD5258FSFASDF";
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token === accessToken) {
        res.send(challenge);
    } else {
        res.status(400).send();
    }

    res.send("Hola verifytoken");
}


const receivedMessage = (req, res) => {
    const message = req.body.message;

    if (message) {
        // Procesa el mensaje recibido
        console.log("Mensaje recibido:", message);
        // Realiza acciones adicionales según tus necesidades
        // ...
    }

    res.send("Hola Received");
}









module.exports = {
    verifyToken,
    receivedMessage,
}