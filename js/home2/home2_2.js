window.addEventListener("load", function(event) {

    function hashTagPrint(height, width) {

        var string1     = '',
            newLine     = '\n',
            emptyString = '  ',
            hash        = '#';

        for (var i = 0; i < height; i++) {

            for (var j = 0; j < width; j++) {

                if(i % 2) {

                    if(j !== width - 1) {
                        string1 += emptyString + hash
                    } else {
                        string1 += emptyString
                    }

                } else {
                    string1 += hash + emptyString;
                }

            }

            string1 += newLine;
        }

        alert(string1);
    }

    var setChessBoardHeight = prompt('Укажите высоту шахмотной доски', 5);
    var setChessBoardWidth = prompt('Укажите ширину шахмотной доски', 4);

    hashTagPrint(setChessBoardHeight, setChessBoardWidth);

});