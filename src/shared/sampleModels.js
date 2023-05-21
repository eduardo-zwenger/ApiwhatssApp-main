function SampleText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text",
    });
    return data;
}

function SampleImage(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "image",
        "image": {
            "link": "https://file-examples.com/storage/fea9880a616463cab9f1575/2017/10/file_example_PNG_500kB.png"
        },
        
    });
    return data;
}

function SampleAudio(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://file-examples.com/storage/fea9880a616463cab9f1575/2017/11/file_example_MP3_700KB.mp3"
        },
        
    });
    return data;
}

function SampleVideo(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "video",
        "video": {
            "link": "https://file-examples.com/storage/fea9880a616463cab9f1575/2017/04/file_example_MP4_480_1_5MG.mp4"
        },
        
    });
    return data;
}

function SampleDocument(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "document",
        "document": {
            "link": "https://file-examples.com/storage/fea9880a616463cab9f1575/2017/10/file-sample_150kB.pdf"
        },
        
    });
    return data;
}

function SampleButtons(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Confrmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
        
    });
    return data;
}


function SampleList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "<HEADER_TEXT>"
            },
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Selleciona una para poder ayudarte"
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


function SampleLocation(number){
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
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}