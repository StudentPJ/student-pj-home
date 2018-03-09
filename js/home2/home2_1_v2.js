window.addEventListener("load", function(event) {

    function hashTagPrint(size) {

        // home 2 - task 1 - variation 2;
        var string  = '',
            space   = ' ',
            newLine = '\n',
            hash    = '#',
            result  = '';

        for(var i = 0; i < size; i++) {
            string += hash;
            result += string;

            for (var j = 0; j < size - i; j++) {
                result += space;
            }

            result += newLine;
        }

        alert(result);
    }

    var setSize = prompt('Укажите размер треугольника', 5);

    hashTagPrint(setSize);

});