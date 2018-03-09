window.onload = function() {

    function hashTagPrint(size) {

        // home 2 - task 3 - sub-task2;
        var string  = '',
            newLine = '\n',
            hash    = '#';

        for(var i = 0; i < size; i++) {

            for (var j = 0; j < size - i; j++) {
                string += hash;
            }

            string += newLine;
        }

        alert(string);

    }

    var setSize = prompt('Укажите размер треугольника', 4);

    hashTagPrint(setSize);

};