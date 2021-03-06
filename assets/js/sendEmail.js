//Taken from the 'Putting it all together'videos/walkthrough and adapted for my form and email template
function sendMail(contactForm) {
    emailjs
        // Get data from the form to send in email
        .send("service_ms2f1", "template_bt62od4", {
            from_name: contactForm.fullName.value,
            from_email: contactForm.emailAddress.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Show modal with confirmation message and reset form
                $("#message-sent").modal("show");
                contactForm.reset();
            },
            function (error) {
                console.log("FAILED", error);
                // Show alert and leave data in form for resubmission
                alert(
                    "Oh no, your message did not make it to the finish line. Please try again later or contact support@speedyf1data.com"
                );
            }
        );
    // To block from loading a new page
    return false;
}
