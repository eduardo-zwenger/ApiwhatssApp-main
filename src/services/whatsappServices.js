const { error } = require("console");
const https = require("https");
function SendMessageWhatsApp(data){

    const options = {
        host: "graph.facebook.com",
        path : "/v16.0/111262918624290/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAACiK0FwFPABAFmU4xzGbagdLeRqApxy3r1qYvrz1PqdJ2ZAdqeY0WIAEe8a1XbRnhNAcKdRqKlWwROq3lwZAA6qT5YSGYIpoLJQh6GoZAWSKXWxZA2rjweKaGSkSdG78mbU0FJ4GpE5JIXUXhsBX5ObiL33clIjGgeNZBhjw0VQgsM1ZBxMsM"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d=>{
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}


module.exports = {
    SendMessageWhatsApp,
}