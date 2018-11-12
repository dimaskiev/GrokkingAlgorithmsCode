const votes = {};

function checkedVotes(key) {
    if (key in votes) {
        console.log("kick them out!");
    } else {
        votes[key] = 1;
        console.log("let them vote!");
    }
}