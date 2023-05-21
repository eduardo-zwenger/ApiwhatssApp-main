const whatsappModels = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappServices");


function Procces(textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];

    // hola que tal
    if(textUser.includes("hola")){
        //saludar
        var model = whatsappModels.MessageText("Hola, un gusto saludarte", number);
        models.push(model);
        var modelList = whatsappModels.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("gracias")){
        // agradecimiento
        var model = whatsappModels.MessageText("Gracias a ti por escribirme", number);
        models.push(model);

    }
    else if(textUser.includes("adios") ||
    textUser.includes("chau") ||
    textUser.includes("me voy") ||
    textUser.includes("adiós") ||
    textUser.includes("bye") ||
    textUser.includes("nos vemos")){
        // despedir
        var model = whatsappModels.MessageText("Ve con cuidado", number);
        models.push(model);
    }
    else if(textUser.includes("comprar")){
        // comprar
        var model = whatsappModels.MessageComprar(number);
        models.push(model);

    }
    else if(textUser.includes("vender")){
        // vender
        var model = whatsappModels.MessageText("Registrate para poder evaluarte: https://www.jotform.com/build/231405587147660", number);
        models.push(model);

    }
    else if(textUser.includes("agencia")){
        // agencia
        var model = whatsappModels.MessageLocation(number);
        models.push(model);

    }
    else if(textUser.includes("contacto")){
        // contacto
        var model = whatsappModels.MessageText("*Centro de contacto:*\n 2954598361", number);
        models.push(model);

    }
    else{
        // no entiende
        var model = whatsappModels.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }





    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
    



}




module.exports = {
    Procces,
}