require('dotenv').config();
var querystring = require('querystring');
var https = require('https');

module.exports = (req, res) => {

    const {phoneNumber} = req.body;
    const tel = '57' + phoneNumber;

    if(phoneNumber.length < 10 || phoneNumber.length > 10){
        return res.status(404).json({message: 'Número no valido'});
    }

    // genero un numero random que va a ser el codigo de validacion
    const numRandom = Math.floor(Math.random() * (999999 - 100000) + 100000);
    const code = '' + numRandom;

    // variables de entorno
    const apikey = process.env.apiKey;
    const apiSecret = process.env.apiSecret;

    function sendSMS(tel, code) {

        const text = `Código: ${code}`;

        // Se contruye la cadena del post desde un objeto
        var post_data = querystring.stringify({
            'cmd' : 'sendsms',
            'apikey': apikey,
            'apisecret': apiSecret,
            'dest' : tel,
            //No es posible utilizar el remitente en Am�rica pero s� en Espa�a y Europa
            'senderId' : '',
            'msg' : text
        });

        // Un objeto de opciones sobre donde se envia el post
        var post_options = {
            host: 'www.altiria.net',
            port: '8443',
            path: '/api/http',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(post_data)
            }
        };

        // Se efectua la petici�n
        var post_req = https.request(post_options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                //Es necesario procesar la respuesta y los posibles errores
                console.log('Response: ' + chunk);
            });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
    }

    // sendSMS(tel, code);

    res.json({code});
}