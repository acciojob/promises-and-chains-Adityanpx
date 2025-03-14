//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);

    if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
    }

    let checkAgePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });

    checkAgePromise
        .then((message) => alert(message))
        .catch((error) => alert(error));
});
