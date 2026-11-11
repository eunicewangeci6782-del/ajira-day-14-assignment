
// =====================================
// DAY 7: JAVASCRIPT FUNDAMENTALS
// =====================================


// LESSON 1: VARIABLES

const learnerName = "Eunice Wangeci";

let learningDay = 7;

const isLearningJavaScript = true;

console.log(learnerName);
console.log(learningDay);
console.log(isLearningJavaScript);


// LESSON 2: MATHEMATICAL OPERATORS

let firstNumber = 20;
let secondNumber = 10;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);


// LESSON 3: CONDITIONAL STATEMENTS

let learningProgress = 7;

if (learningProgress >= 7) {
    console.log("Congratulations! You have completed Week 1.");
} else {
    console.log("Keep learning. You are making progress!");
}


// LESSON 4: ARRAYS AND LOOPS

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git and GitHub"
];

console.log(skills);

for (const skill of skills) {
    console.log("I am learning: " + skill);
}


// LESSON 5: FUNCTIONS AND PARAMETERS

function greetLearner(name) {
    console.log("Hello " + name + "! Welcome to web development.");
}

greetLearner("Eunice Wangeci");


function calculateStudyHours(hoursPerDay, days) {
    return hoursPerDay * days;
}

const totalStudyHours = calculateStudyHours(2, 30);

console.log("My total study hours are: " + totalStudyHours);


// =====================================
// DAY 8: DOM MANIPULATION
// =====================================

const visitorNameInput =
    document.getElementById("visitorName");

const greetButton =
    document.getElementById("greetButton");

const greetingMessage =
    document.getElementById("greetingMessage");


function showGreeting() {

    const visitorName = visitorNameInput.value.trim();

    if (visitorName === "") {

        greetingMessage.textContent =
            "Please enter your name first.";

        greetingMessage.style.color = "red";

    } else {

        greetingMessage.textContent =
            "Hello " + visitorName +
            "! Welcome to Eunice Wangeci's portfolio.";

        greetingMessage.style.color = "green";

    }
}


if (visitorNameInput && greetButton && greetingMessage) {
    greetButton.addEventListener("click", showGreeting);
}


// =====================================
// DAY 11: CONTACT FORM VALIDATION
// =====================================

// STEP 1: Select the HTML form elements

const contactForm =
    document.getElementById("contactForm");

const contactNameInput =
    document.getElementById("contactName");

const contactEmailInput =
    document.getElementById("contactEmail");

const contactMessageInput =
    document.getElementById("contactMessage");

const formFeedback =
    document.getElementById("formFeedback");


// STEP 2: Listen for form submission

if (
    contactForm &&
    contactNameInput &&
    contactEmailInput &&
    contactMessageInput &&
    formFeedback
) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the browser from refreshing the page
        event.preventDefault();


        // STEP 3: Collect visitor information

        const contactName = contactNameInput.value.trim();

        const contactEmail = contactEmailInput.value.trim();

        const contactMessage = contactMessageInput.value.trim();


        // STEP 4: Check for empty fields

        if (
            contactName === "" ||
            contactEmail === "" ||
            contactMessage === ""
        ) {

            formFeedback.textContent =
                "Please complete all fields.";

            formFeedback.style.color = "red";

            return;
        }


        // STEP 5: Validate the email address

        if (!contactEmailInput.checkValidity()) {

            formFeedback.textContent =
                "Please enter a valid email address.";

            formFeedback.style.color = "red";

            return;
        }


        // STEP 6: Display success feedback

        formFeedback.textContent =
            "Thank you, " + contactName +
            "! Your message has been validated successfully.";

        formFeedback.style.color = "green";


        // STEP 7: Reset the form

        contactForm.reset();

    });

}
