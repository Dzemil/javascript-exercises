const sumAll = function(sumStart, sumEnd) {
    if ((sumStart < 0) || (sumEnd < 0)) {
        return "ERROR";
    }  
    else if ((typeof sumStart === "number") && (typeof sumEnd === "number")) {
        const high = Math.max(sumStart, sumEnd);
        const low = Math.min(sumStart, sumEnd);
        
        return high * (high + 1) / 2 - (low - 1) * (low) / 2;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
