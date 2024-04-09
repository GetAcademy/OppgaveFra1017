function validateSudokuboard(sudoboardString) {
    if (sudoboardString.length != 16) return 'ugyldig brett, feil lengde'
    let theBoardWithoutSpaces = ''
    for (let i = 0; i < sudoboardString.length; i++) {
        if (sudoboardString[i] != ' ') {
            theBoardWithoutSpaces += sudoboardString[i]
        }
    }
    if (!checkInvalidCharacters(theBoardWithoutSpaces)) return 'ugyldig brett, ugyldig tegn'
    let firstPartOfMessage = ['delvis', 'helt']
    if (!checkRows(sudoboardString)) {
        return firstPartOfMessage[Math.floor(theBoardWithoutSpaces.length / 16)] + ' utfylt, feil i rad'
    }
    if (!checkColumns(sudoboardString)) {
        return firstPartOfMessage[Math.floor(theBoardWithoutSpaces.length / 16)] + ' utfylt, feil i kolonne'
    }
    if (!checkBoxes(sudoboardString)) {
        return firstPartOfMessage[Math.floor(theBoardWithoutSpaces.length / 16)] + ' utfylt, feil i firkant'
    }
    return firstPartOfMessage[Math.floor(theBoardWithoutSpaces.length / 16)] + ' utfylt, ingen feil'
}
function checkRows(theBoard) {
    let theRows = ['', '', '', '']
    for (let i = 0; i < theBoard.length; i++) {
        if (theBoard[i] != ' ') {
            theRows[Math.floor(i / 4)] += theBoard[i]
        }
    }
    for (let j = 0; j < theRows.length; j++) {
        if (new Set(theRows[j]).size != theRows[j].length) {
            return false
        }
    }
    return true
}
function checkColumns(theBoard) {
    let theColumns = ['', '', '', '']
    for (let i = 0; i < theBoard.length; i++) {
        if (theBoard[i] != ' ') {
            theColumns[i % 4] += theBoard[i]
        }
    }
    for (let j = 0; j < theColumns.length; j++) {
        if (new Set(theColumns[j]).size != theColumns[j].length) {
            return false
        }
    }
    return true
}
function checkBoxes(theBoard) {
    let theBoxes = ['', '', '', '']
    for (let i = 0; i < theBoard.length; i++) {
        if (theBoard[i] != ' ') {
            //Math.floor(i/8) returnerer 0 dersom vi er i rad 0 eller rad 1, og returnerer 1 for rad 2 or 3
            //Math.floor((i % 4) / 2) returnerer 0 for kolonne 0 og kolonne 1, og returnerer 1 for kolonne 2 og 3
            theBoxes[2 * Math.floor(i / 8) + Math.floor((i % 4) / 2)] += theBoard[i]
        }
    }
    for (let j = 0; j < theBoxes.length; j++) {
        if (new Set(theBoxes[j]).size != theBoxes[j].length) {
            return false
        }
    }
    return true
}
function checkInvalidCharacters(theBoard) {
    let validCharacters = ['1', '2', '3', '4']
    for (let i = 0; i < theBoard.length; i++) {
        if (!validCharacters.includes(theBoard[i])) {
            return false
        }
    }
    return true
}