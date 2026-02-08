function newPrice(currentPrice , discount ) { 
    let discountPrice = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountPrice;
    if (typeof currentPrice != 'number' || typeof discount != 'number'){
        return "Invalid";
    }
    if (discount < 0 || discount > 100){
        return "Invalid";
    }
    return finalPrice.toFixed(3);
}

function validOtp(otp) { 
    if(typeof otp != 'string'){
        return "Invalid";
    }
    if(otp.length == 8 && otp.startsWith("ph-")){
        return true;
    }
    else{
        return false;
    }
}

function finalScore (omr) { 
    const totalQues = omr.right + omr.wrong + omr.skip;

    if (totalQues != 100) {
        return "Invalid";
    }

    let marks = (omr.right * 1) - (omr.wrong * 0.5);
    return Math.round(marks);
}

function gonoVote(array) {
    let haCounts = 0;
    let naCounts = 0;

    if (!Array.isArray(array)) {
        return "Invalid";
    }

    for (let votes of array) {
        if (votes === "ha")
            haCounts++;
        else if (votes === "na")
            naCounts++;
    }

    if (haCounts > naCounts){
        return true;
    }
    if (haCounts === naCounts){
        return "equal";
    }else{
        return false;
    }
}

function analyzeText(str) {
    if (typeof str != 'string' || str.trim().length === 0) {
        return "Invalid";
    }
    const token = str.split(" ").join("").length;
    const words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return {
        longwords: longestWord,
        token: token
    };
}


