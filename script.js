    document.getElementById("googleForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const status = document.getElementById("statusMessage");
        status.textContent = "Submitting...";

        const formData = new FormData(this);
        
        fetch("https://docs.google.com/forms/d/e/1FAIpQLSd_6HQUXasU1bra5WcxaR_shgQpGvxY6__tUZBcH4giDaB3fg/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
             
            status.textContent = "Success! Your message has been sent. We'll get back to you shortly.";
            document.getElementById("googleForm").reset();
        }).catch(() => {
            status.textContent = "Oops! Submission failed. Please try again or feel free to contact us directly.";
        });

        // Set a timeout fallback
        setTimeout(() => {
            if (status.textContent === "Submitting...") {
                status.textContent = "Oops! Submission failed. Please try again or feel free to contact us directly.";
            }
        }, 4000);
    });