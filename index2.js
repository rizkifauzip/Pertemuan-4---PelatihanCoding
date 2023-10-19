const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});   
function validateGmail(gmail) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(gmail);
  }
function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/; // Validasi nomor telepon dengan tepat 10 digit
    return phoneRegex.test(phone);
  }
  
    function getUserInput() {
rl.question('what is your name?',(nama)=> {
    rl.question('what is your number phone?',(phone)=> {
        if (!validatePhoneNumber(phone)) {
            console.log('Nomor telepon tidak valid. Harus terdiri dari 10 digit angka.!!!');
            getUserInput();
            return;
        };
        rl.question('what is your gmail?',(gmail)=> {
            if(!validateGmail (gmail)){
                console.log('Alamat Gmail tidak sesuai!,Silahkan mengisi ulang tambahkan @gmail.com')
                getUserInput();
                return;
            };
            
    console.log(`your name is ${nama} ,`, `your number is ${phone} ,`, `your gmail is ${gmail},`);

    rl.close();
        });
    });
});
};
getUserInput();
