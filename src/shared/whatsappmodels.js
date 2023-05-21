function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text",
    });
    return data;
}

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Bienvenido"
            },
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Seleciona una para poder ayudarte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atendera uno de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageComprar(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Seleciona uno de los productos?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "computadora"
                        }
                    }
                ]
            }
        }
        
    });
    return data;
}

function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "location",
        "location": {
            "longitude": "-32.41605194514795",
            "latitude":" -63.24502945120047",
            "name":"Atilra",
            "address":"Manuel Belgrano 280, X5912 Villa María, Córdoba"
        }
    });
    return data;
}


module.exports = {
    MessageText,
    MessageList,
    MessageComprar,
    MessageLocation,
}