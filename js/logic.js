   function verifyAccess() {
    let  plan= String(document.getElementById("purchasePrice").value);
    let isPaid = (document.getElementById("isPaid").value === "true");

    if (isPaid === false) {
        document.getElementById("accessLevel").textContent = "blocked.";
    }
        
    if(plan === "basic" && isPaid === true) {
        document.getElementById("accessLevel").textContent = "limited.";
    } 
        
    if (plan === "premium" && isPaid === true) {
        document.getElementById("accessLevel").textContent = "full.";
    }


    try {
        if (plan !== "basic" && plan !== "premium") {
            throw Error("Invalid plan type. Please enter 'basic' or 'premium'.");
        }
    } catch (typeError) {
        document.getElementById("accessLevel").textContent = "Invalid plan type. Please enter 'basic' or 'premium'.";
       
    }
}


