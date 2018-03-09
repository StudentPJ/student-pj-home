window.onload = function() {

    function hashTagPrint(size) {

        // home 2 - task 3 - sub-task1;
        var string      = '',
            newLine     = '\n',
            emptyString = '  ',
            hash        = '#';

        for(var i = 0; i < size; i++) {

            for (var j = 0; j < i; j++) {
                string += emptyString;
            }

            for (var k = 0; k < size - i; k++) {
                string += hash;
            }

            string += newLine;
        }

        alert(string);

    }

    var setSize = prompt('Укажите размер треугольника', 4);

    hashTagPrint(setSize);

};