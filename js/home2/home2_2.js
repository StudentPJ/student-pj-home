window.onload = function() {

    function hashTagPrint(height, width) {

        var resultString = '',
            newLine      = '\n',
            emptyString  = '  ',
            hash         = '#';

        for (var i = 0; i < height; i++) {

            for (var j = 0; j < width; j++) {

                if(i % 2) {
                    resultString += emptyString + hash
                } else {
                    resultString += hash + emptyString;
                }

            }

            resultString += newLine;
        }

        alert(resultString);
    }

    var setChessBoardHeight = prompt('Укажите высоту шахмотной доски', 5);
    var setChessBoardWidth = prompt('Укажите ширину шахмотной доски', 4);

    hashTagPrint(setChessBoardHeight, setChessBoardWidth);

};