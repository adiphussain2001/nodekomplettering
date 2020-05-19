const http = require("http"); // Inkluderar http metoden genom require modulen
const path = require("path"); // Inkluderar path fil söks väg genom require modulen

const get = function (req,res){ // Nu namnger jag funktionen function till get
    res.writeHead(200); //Kontrollkod 200, för success
    res.end("Namnet på servern: "+ path.basename(__filename)+"\n"+ "Detta är ditt ip: "+ req.connection.remoteAddress + "\n" + "Detta är porten din webbläsare använder: "+ req.connection.remotePort+"\n"+"Detta är metoden du använde:" +req.method+"\n");
    //path.basename hittar filnamnet, req.connection.remoteAddress visar ip adress, remotePort visar port namn, req.method visar metoden  GET

}
const server = http.createServer(get); //Skapar servern, hämtar funktionen genom get
server.listen(3000); //visar på port 3000
