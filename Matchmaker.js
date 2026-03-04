console.log("Starting Matchmaker...");

function calulateCompatibility(){
    console.log("calulateCompatibility()");

    const DESIRED_RESPONSE = [
        2, /*disagree */ 
        1, /*Strongly Disagree */ 
        4, /*Agree */
        5, /*Strongly Agree */
        4 /*Agree */
    ];


    const MAX_SCORE = 25;

    let question1Response = document.getElementById("q1").selectedOptions[0].value;
    let question2Response = document.getElementById("q2").selectedOptions[0].value;
    let question3Response = document.getElementById("q3").selectedOptions[0].value;
    let question4Response = document.getElementById("q4").selectedOptions[0].value;
    let question5Response = document.getElementById("q5").selectedOptions[0].value;


    /* testing to ensure values are calculated */
    console.log("Question 1 Answers:");
    console.log(document.getElementById("q1").selectedOptions[0].text);
    console.log(document.getElementById("q1").selectedOptions[0].value);
    console.log(question1Response);

    console.log("Question 2 Answers:");
    console.log(document.getElementById("q2").selectedOptions[0].text);
    console.log(document.getElementById("q2").selectedOptions[0].value);
    console.log(question2Response);

    console.log("Question 3 Answers:");
    console.log(document.getElementById("q3").selectedOptions[0].text);
    console.log(document.getElementById("q3").selectedOptions[0].value);
    console.log(question3Response);

    console.log("Question 4 Answers:");
    console.log(document.getElementById("q4").selectedOptions[0].text);
    console.log(document.getElementById("q4").selectedOptions[0].value);
    console.log(question4Response);

    console.log("Question 5 Answers:");
    console.log(document.getElementById("q5").selectedOptions[0].text);
    console.log(document.getElementById("q5").selectedOptions[0].value);
    console.log(question5Response);
    /* end testing */

    let question1Compatibility = 5 - Math.abs(question1Response - DESIRED_RESPONSE[0]);
    let question2Compatibility = 5 - Math.abs(question2Response - DESIRED_RESPONSE[1]);
    let question3Compatibility = 5 - Math.abs(question3Response - DESIRED_RESPONSE[2]);
    let question4Compatibility = 5 - Math.abs(question4Response - DESIRED_RESPONSE[3]);
    let question5Compatibility = 5 - Math.abs(question5Response - DESIRED_RESPONSE[4]);

    /* Compatibilty scores per question */
    console.log("Compatibility value of q1 is "+ question1Compatibility);
    console.log("Compatibility value of q2 is "+ question2Compatibility);
    console.log("Compatibility value of q3 is "+ question3Compatibility);
    console.log("Compatibility value of q4 is "+ question4Compatibility);
    console.log("Compatibility value of q5 is "+ question5Compatibility);

    /* Total compatibility */
    let totalCompatibility = question1Compatibility + question2Compatibility + question3Compatibility
    + question4Compatibility + question5Compatibility;

    // Converstion to percentage
    totalCompatibility *= 100 / MAX_SCORE;
    totalCompatibility = Math.round(totalCompatibility);
    console.log("compatibility percentage = "+totalCompatibility);



    document.getElementById("Compatibility").innerHTML = "Your compatibility is: " + totalCompatibility;
}