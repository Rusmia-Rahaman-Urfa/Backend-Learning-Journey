function gonoVote(array) {
    let haCounts = 0;
    let naCounts = 0;

    if (!Array.isArray(array)) {
        return "Invalid";
    }

    for (let votes of array) {
        if (votes === "ha") haCounts++;
        else if (votes === "na") naCounts++;
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
// --- Test Cases ---
console.log(gonoVote(["ha", "na", "ha"]));        // Output: true
console.log(gonoVote(["ha", "na", "na", "ha"]));  // Output: "equal"
console.log(gonoVote(["ha", "na", "na"]));        // Output: false
console.log(gonoVote("ha, na, ha"));              // Output: Invalid (Input is a string)
console.log(gonoVote({ vote: "ha" }));            // Output: Invalid (Input is an object)