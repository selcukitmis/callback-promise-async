const sendMail = (callback, hata) => {
    try {
        console.log("get data çalıştı");
        if (callback) {
            callback("selam ben callback");
        }
        else {
            console.log("callback yok");
        }
    }
    catch (ex) {
        if (hata) {
            hata(ex);
        }
    }
}

const sendMailPromise = function (username, password) {
    return new Promise((resolve, reject) => {
        if (username === "ua") {
            resolve("Stuff worked!");
        } else {
            reject(Error("It broke"));
        }
    });
}


module.exports = { sendMail, sendMailPromise };