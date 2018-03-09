window.onload = function() {

    function hashTagPrint(size) {

        // home 2 - task 1 - variation 1;
        var string = '';
        var result = '';

        for(var i = 0; i < size; i++) {
            string += '#';
            result += string + '\n';
        }

        alert(result);

    }

    var setSize = prompt('Укажите размер треугольника', 5);

    hashTagPrint(setSize);

};