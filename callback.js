const { sendMail } = require("./database");

const dataOku = () => {
    console.log("data oku çalıştı");

    sendMail(
        (response) => {
            console.log("send mail çalışmış");
            console.log("callback : ", response);
        },
        (error) => {
            console.log(error);
        }
    );

}
dataOku();