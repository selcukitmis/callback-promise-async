const { sendMailPromise } = require("./database");


const mailGonder = () => {
    sendMailPromise("ua", "pwd")
        .then((responseData) => { console.log(responseData); })
        .catch((err) => { console.log("error"); })
}

mailGonder();