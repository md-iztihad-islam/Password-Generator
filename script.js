const generateBtn = document.querySelector(".generate-btn");
const copyToClipboardBtn = document.querySelector(".copy-to-clipboard-btn");
const passwordLengthInput = document.querySelector("#pass-length-input");
const uppercaseCheckbox = document.querySelector("#uppercase-input");
const lowercaseCheckbox = document.querySelector("#lowercase-input");
const numbersCheckbox = document.querySelector("#numbers-input");
const symbolsCheckbox = document.querySelector("#symbols-input");
const display = document.querySelector('.display')

generateBtn.addEventListener("click", () => {
    const passwordLength = Number(passwordLengthInput.value);
    let addUppercaseLetters = false;
    let addLowercaseLetters = false;
    let addNumbers = false;
    let addSymbols = false;
    if(uppercaseCheckbox.checked){
        addUppercaseLetters = true;
    }
    if(lowercaseCheckbox.checked){
        addLowercaseLetters = true;
    }
    if(numbersCheckbox.checked){
        addNumbers = true;
    }
    if(symbolsCheckbox.checked){
        addSymbols = true;
    }


    let password = '';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#%&';

    for(let i=0; i<passwordLength; i++){
        const randomNumber = Math.round(Math.random() * 60);

        const indexForUppercase = Math.floor(Math.random() * 26);
        const indexForLowercase = Math.floor(Math.random() * 26);
        const indexForNumber = Math.floor(Math.random() * 9);
        const indexForSymbol = Math.floor(Math.random() * 5);

        if(addLowercaseLetters && !addUppercaseLetters && !addNumbers && !addSymbols){
            password += lowercaseLetters[indexForLowercase];
        }else if(!addLowercaseLetters && addUppercaseLetters && !addNumbers && !addSymbols){
            password += uppercaseLetters[indexForUppercase];
        }else if(!addLowercaseLetters && !addUppercaseLetters && addNumbers && !addSymbols){
            password += numbers[indexForNumber];
        }else if(!addLowercaseLetters && !addUppercaseLetters && !addNumbers && addSymbols){
            password += symbols[indexForSymbol];
        }else if(addLowercaseLetters && addUppercaseLetters && !addNumbers && !addSymbols){
            if(randomNumber % 2 === 0){
                password += lowercaseLetters[indexForLowercase];
            }else{
                password += uppercaseLetters[indexForUppercase];
            }
        }else if(addLowercaseLetters && !addUppercaseLetters && addNumbers && !addSymbols){
            if(randomNumber % 2 === 0){
                password += lowercaseLetters[indexForLowercase];
            }else{
                password += numbers[indexForNumber];
            }
        }else if(addLowercaseLetters && !addUppercaseLetters && !addNumbers && addSymbols){
            if(randomNumber % 2 === 0){
                password += lowercaseLetters[indexForLowercase];
            }else{
                password += symbols[indexForSymbol];
            }
        }else if(!addLowercaseLetters && addUppercaseLetters && addNumbers && !addSymbols){
            if(randomNumber % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else{
                password += numbers[indexForNumber];
            }
        }else if(!addLowercaseLetters && addUppercaseLetters && !addNumbers && addSymbols){
            if(randomNumber % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else{
                password += symbols[indexForSymbol];
            }
        }else if(!addLowercaseLetters && !addUppercaseLetters && addNumbers && addSymbols){
            if(randomNumber % 2 === 0){
                password += numbers[indexForNumber];
            }else{
                password += symbols[indexForSymbol];
            }
        }else if(addLowercaseLetters && addUppercaseLetters && addNumbers && !addSymbols){
            const randomNumber02 = Math.round(Math.random() * 60);

            if(randomNumber % 2 === 0 && randomNumber02 % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else if(randomNumber % 2 !== 0 && randomNumber02 % 2 !== 0){
                password += lowercaseLetters[indexForLowercase];
            }else{
                password += numbers[indexForNumber];
            }
        }else if(addLowercaseLetters && addUppercaseLetters && !addNumbers && addSymbols){
            const randomNumber02 = Math.round(Math.random() * 60);

            if(randomNumber % 2 === 0 && randomNumber02 % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else if(randomNumber % 2 !== 0 && randomNumber02 % 2 !== 0){
                password += lowercaseLetters[indexForLowercase];
            }else{
                password += symbols[indexForSymbol];
                console.log(indexForSymbol);
            }
        }else if(!addLowercaseLetters && addUppercaseLetters && addNumbers && addSymbols){
            const randomNumber02 = Math.round(Math.random() * 60);

            if(randomNumber % 2 === 0 && randomNumber02 % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else if(randomNumber % 2 !== 0 && randomNumber02 % 2 !== 0){
                password += symbols[indexForSymbol];
            }else{
                password += numbers[indexForNumber];
            }
        }else if(addLowercaseLetters && addUppercaseLetters && addNumbers && addSymbols){
            const randomNumber02 = Math.round(Math.random() * 60);

            if(randomNumber % 2 === 0 && randomNumber02 % 2 === 0){
                password += uppercaseLetters[indexForUppercase];
            }else if(randomNumber % 2 !== 0 && randomNumber02 % 2 !== 0){
                password += lowercaseLetters[indexForLowercase];
            }else if(randomNumber % 2 == 0 && randomNumber02 % 2 !== 0){
                password += numbers[indexForNumber];
            }else{
                password += symbols[indexForSymbol];
            }
        }
    }

    display.style.color = 'black';
    display.textContent = password;

    uppercaseCheckbox.checked = false;
    lowercaseCheckbox.checked = false;
    numbersCheckbox.checked = false;
    symbolsCheckbox.checked = false;
    passwordLengthInput.value = '';

})

copyToClipboardBtn.addEventListener("click", () => {
    const password = display.textContent;

    if(password){
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!")
        })
    }else{
        alert("No password to copy. Please generate one first.");
    }
})