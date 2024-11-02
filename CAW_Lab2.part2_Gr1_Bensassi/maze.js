window.onload = function() {
    // Declaration of variables 
    var boundaries = document.querySelectorAll(".boundary");
    var end = document.getElementById("end");
    var start = document.getElementById("start");
    var status = document.getElementById("status");

    // Exercise 1: Single boundary turns red 
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", function() {
            // boundary.classList.add("youlose"); 
        });
    });

    // Exercise 2: All boundaries glow red on hover
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(b => b.classList.add("youlose"));
        });
    });

    // Exercise 3: Alerts on successful completion of maze
    end.addEventListener("mouseover", function() {
        if (!document.querySelector(".youlose")) {
            // alert("You win!"); 
        }
    });

    // Exercise 4: Restartable maze
    start.addEventListener("click", function() {
        boundaries.forEach(b => b.classList.remove("youlose"));
    });

    // Exercise 6: On-page status updates 
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(b => b.classList.add("youlose"));
            status.textContent = "You lose!";
        });
    });

    end.addEventListener("mouseover", function() {
        if (!document.querySelector(".youlose")) {
            status.textContent = "You win!";
        }
    });

    start.addEventListener("click", function() {
        boundaries.forEach(b => b.classList.remove("youlose"));
        status.textContent = "Move your mouse over the 'S' to begin ."; 
    });

    // Exercise 7: Disallow cheating
    var gameStarted = false;

    start.addEventListener("click", function() {
        gameStarted = true; 
    });

    document.getElementById("maze").addEventListener("mouseleave", function() {
        if (gameStarted) {
            boundaries.forEach(b => b.classList.add("youlose"));
            status.textContent = "You lose!";
        }
    });
};
