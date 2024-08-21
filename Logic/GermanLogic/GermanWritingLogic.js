function typingQuestionGenerator() {
    let expectedString;
    let randomNumber = 0;

    const usersInput = document.getElementById('usersInput');
    const germanTranslate = [
        [
            "Test eins",
            "Test zwei"
        ], 
        [
            "Test one",
            "Test two"
        ]
    ];

    function updatePageContent() {
        expectedString = germanTranslate[1][randomNumber];
        document.getElementById('usersOutput').innerHTML = germanTranslate[0][randomNumber];

        
    }

    document.getElementById('continueButton').addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * germanTranslate[0].length);

        let userInputValue = usersInput.value;

        if (expectedString.toUpperCase() === userInputValue.toUpperCase()) {
            console.log("Strings match (case-insensitive)");
        } else {
            console.log("Strings do not match (case-sensitive)");
        }


        updatePageContent();
    });

    updatePageContent();
}

typingQuestionGenerator();