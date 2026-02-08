function finalScore (omr) {
    const totalQues = omr.right + omr.wrong + omr.skip;

    if (totalQues != 100) {
        return "Invalid";
    }

    let marks = (omr.right * 1) - (omr.wrong * 0.5);
    return Math.round(marks);
}

// --- Test Cases ---
console.log(finalScore({ right: 67, wrong: 23, skip: 10 })); 
console.log(finalScore({ right: 80, wrong: 15, skip: 5 }));  
console.log(finalScore({ right: 50, wrong: 10, skip: 10 })); 
console.log(finalScore({ right: 90, wrong: 5, skip: 5 }));   




