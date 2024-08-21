function typingQuestionGenerator() {
    let expectedString;
    let randomNumber = 0;

    const usersInput = document.getElementById('usersInput');
    const germanAudio = [
        [
            "Test",
            "Test2"
        ], 
        [
            "Test",
            "Test2"
        ],
        [
            "Audio/German Audio/numbers1to20-german.mp3",
            "Audio/German Audio/umlaute-german.mp3"
        ]
    ];

    function updatePageContent() {
        expectedString = germanAudio[1][randomNumber];
        document.getElementById('audioPlayer').src = germanAudio[2][randomNumber];
        document.getElementById('usersInput').innerHTML = germanAudio[0][randomNumber];

        
    }

    document.getElementById('continueButton').addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * germanAudio[0].length);

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