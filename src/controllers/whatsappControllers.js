const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");

const verifyToken = (req, res) => {
    try{
        var accessToken = "ASDFSDFSD5258FSFASDF";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        }else{
            res.status(400).send();
        }

        console.log(req);
    }catch(e){
        res.status(400).send();
    }
}


const receivedMessage = (req, res) => {
    
    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObjet = value["messages"];

        if(typeof messageObjet != "undefined"){
            var messages = messageObjet[0];
            
            var number = messages["from"];
            number = number.replace("549", "54");


            var text = GetTextUser(messages);

            if(text != ""){
                myConsole.log(text);
                myConsole.log(number);
                processMessage.Procces(text, number)
                
            }
            
        }


        res.send("EVENT_RECEIVED");

    }catch(e){
        myConsole.log(e)
        res.send("EVENT_RECEIVED");
    }
}

function GetTextUser(messages){
    var text = "";
    var typeMessage = messages["type"];
    if(typeMessage == "text"){
        text = (messages["text"])["body"];
    }
    else if(typeMessage == "interactive"){
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}



module.exports = {
    verifyToken,
    receivedMessage,
}