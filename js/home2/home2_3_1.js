window.onload = function() {

    function hashTagPrint(size) {

        // home 2 - task 3 - sub-task1;
        var string      = '',
            newLine     = '\n',
            emptyString = '  ',
            hash        = '#';

        for(var i = 0; i < size; i++) {

            for (var j = 0; j < size - i; j++) {
                string += emptyString;
            }

            for (var k = 0; k < i + 1; k++) {
                string += hash;
            }

            string += newLine;
        }

        alert(string);

    }

    var setSize = prompt('Укажите размер треугольника', 4);

    hashTagPrint(setSize);

};