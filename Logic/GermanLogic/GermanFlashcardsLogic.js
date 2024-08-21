let isOutputVisible = false;

document.getElementById('flipButton').addEventListener('click', function() {
    const otherSide = document.getElementById('otherSide');
    const continueButton = document.getElementById('continueButton');
    const flashcardLine = document.getElementById('flashcardLine');
    const flipButton = document.getElementById('flipButton');

    if (isOutputVisible) {
        otherSide.style.display = 'none';
        continueButton.style.display = 'none';
        flashcardLine.style.display = 'none';
        flipButton.textContent = 'Check Answer';
                
        isOutputVisible = false;

    } else {
        otherSide.style.display = 'block';
        continueButton.style.display = 'block';
        flashcardLine.style.display = 'block';
        flipButton.textContent = 'Hide Answer';

        isOutputVisible = true;
    }
});

