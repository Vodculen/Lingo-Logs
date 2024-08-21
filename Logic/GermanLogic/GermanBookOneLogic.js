let isTranslationsVisible = true;

document.getElementById('toggleTranslations').addEventListener('click', function() {
    const toggleTranslations = document.getElementById('toggleTranslations');
    const translatedSideRight = document.getElementById('translatedSideRight');
    const translatedSideLeft = document.getElementById('translatedSideLeft');
    const bookLine = document.getElementById('bookLine');
    const bookTitleTranslated = document.getElementById('bookTitleTranslated');

    if (isTranslationsVisible) {
        toggleTranslations.textContent = 'Hide Translations';
        translatedSideRight.style.display = 'block';
        translatedSideLeft.style.display = 'block';
        bookLine.style.display = 'block';
        bookTitleTranslated.style.display = 'block';
                
        isTranslationsVisible = false;
    } 
    else {
        toggleTranslations.textContent = 'Show Translations';
        translatedSideRight.style.display = 'none';
        translatedSideLeft.style.display = 'none';
        bookLine.style.display = 'none';
        bookTitleTranslated.style.display = 'none';

        isTranslationsVisible = true;
    }
});

function pageTurner() {
    let pageNumber = 0;

    const germanbookOne = [
        [
            [
                "&nbsp; &nbsp; Um Desinformationskampagnen für die Deutschlandwahlen aufzudecken, wurde in diesem Projekt eine innovative sektorübergreifende Methodik eingesetzt, die neueste Social-Media-Analysen (einschließlich verschiedener Techniken zur Identifizierung automatisierter Social-Media-Accounts), neben investigativem Journalismus vor Ort und fundiertes Expertenwissen nutzt. Unsere Untersuchungen ergaben klare und koordinierte Bemühungen, drei wichtige Wählergruppen zu beeinflussen: (1) die nationalistische Rechte, (2) die extreme Linke und (3) die russisch-deutsche Gemeinschaft. <br> &nbsp; &nbsp; Obgleich ausreichend bekannt ist, dass nationale Regierungen seit einigen Jahren versuchen, das politische Geschehen außerhalb ihrer Grenzen zu beeinflussen, tragen die Ergebnisse dieses Projekts dazu bei, die aktuelle Diskussion um den Einfluss des Kremls auf die europäischen demokratischen Prozesse in ausgewogener Weise zu vertiefen. Die hier eingesetzte Methodik ermöglichte es uns, direkte (regierungsgeleitet, staatlich gefördert oder regierungsnah) und indirekte Versuche der Einflussnahme aufzudecken – genauer gesagt, wie diese Einflussnahme zur Mobilisierung von Basisorganisationen genutzt wird. Das Ausmaß, in dem allgemeine Schlussfolgerungen über den Umfang und die tatsächlichen <br> &nbsp; &nbsp; Auswirkungen des Einflusses des Kremls auf die deutschen Wahlen 2017 gezogen werden können, bleibt jedoch begrenzt. In allen Studien zu externen Einflüssen in der politischen Entscheidungsfindung gibt es erhebliche Vorbehalte, vor allem in Bezug auf die Kausalität zwischen Einmischung und Wahlverhalten. Nichtsdestotrotz sind diese Ergebnisse ein gutes Beispiel dafür, wie die Aktivitäten eines externen Akteurs Wahlkampagnen manipulieren und bestehende Missstände ausnutzen können. ",
                "Test"
            ],
            [
                "&nbsp; &nbsp; Um Desinformationskampagnen für die Deutschlandwahlen aufzudecken, wurde in diesem Projekt eine innovative sektorübergreifende Methodik eingesetzt, die neueste Social-Media-Analysen (einschließlich verschiedener Techniken zur Identifizierung automatisierter Social-Media-Accounts), neben investigativem Journalismus vor Ort und fundiertes Expertenwissen nutzt. Unsere Untersuchungen ergaben klare und koordinierte Bemühungen, drei wichtige Wählergruppen zu beeinflussen: (1) die nationalistische Rechte, (2) die extreme Linke und (3) die russisch-deutsche Gemeinschaft. <br> &nbsp; &nbsp; Obgleich ausreichend bekannt ist, dass nationale Regierungen seit einigen Jahren versuchen, das politische Geschehen außerhalb ihrer Grenzen zu beeinflussen, tragen die Ergebnisse dieses Projekts dazu bei, die aktuelle Diskussion um den Einfluss des Kremls auf die europäischen demokratischen Prozesse in ausgewogener Weise zu vertiefen. Die hier eingesetzte Methodik ermöglichte es uns, direkte (regierungsgeleitet, staatlich gefördert oder regierungsnah) und indirekte Versuche der Einflussnahme aufzudecken – genauer gesagt, wie diese Einflussnahme zur Mobilisierung von Basisorganisationen genutzt wird. Das Ausmaß, in dem allgemeine Schlussfolgerungen über den Umfang und die tatsächlichen <br> &nbsp; &nbsp; Auswirkungen des Einflusses des Kremls auf die deutschen Wahlen 2017 gezogen werden können, bleibt jedoch begrenzt. In allen Studien zu externen Einflüssen in der politischen Entscheidungsfindung gibt es erhebliche Vorbehalte, vor allem in Bezug auf die Kausalität zwischen Einmischung und Wahlverhalten. Nichtsdestotrotz sind diese Ergebnisse ein gutes Beispiel dafür, wie die Aktivitäten eines externen Akteurs Wahlkampagnen manipulieren und bestehende Missstände ausnutzen können. ",
                "Test"
            ]
            
        ], 
        [
            [
                "Test1",
                "Test2"
            ],
            [
                "Test1",
                "Test2"
            ]
            
        ]
    ];

    function updatePageContent() {
        document.getElementById('germanSideRight').innerHTML = germanbookOne[0][0][pageNumber];
        document.getElementById('germanSideLeft').innerHTML = germanbookOne[0][1][pageNumber];
        document.getElementById('englishSideRight').innerHTML = germanbookOne[1][0][pageNumber];
        document.getElementById('englishSideLeft').innerHTML = germanbookOne[1][1][pageNumber];  
    }

    document.getElementById('nextPage').addEventListener('click', function() {
        if (pageNumber < germanbookOne[0].length - 1) {
            pageNumber++;
            updatePageContent();
        }

        console.log("forward");
    });

    document.getElementById('previousPage').addEventListener('click', function() {
        if (pageNumber > 0) {
            pageNumber--;
            updatePageContent();
        }

        console.log("back");
    });

    updatePageContent();
}

pageTurner();