window.addEventListener("load", function(event) {
    var userName = "user1",
        userPass = "qwerty",
        enteredUserLogin,
        enteredUserPass,
        passAttempts = 0,
        totalPassAttempts = 3;

    enteredUserLogin = prompt('Введите логин', 'Логин');

    if (enteredUserLogin !== userName) {
        alert('Вы ввели НЕВЕРНЫЙ логин');
    } else {
        for (var i = 0; i <= passAttempts; i++) {
            enteredUserPass = prompt('Введите пароль', 'Пароль');
            if (enteredUserPass === userPass) {
                alert('Вы ввели ВЕРНЫЙ пароль');
                break;
            } else if (passAttempts === totalPassAttempts) {
                alert('Вы ввели НЕВЕРНЫЙ пароль. У вас осталось ' + (totalPassAttempts - passAttempts) + ' попыток');
                break;
            } else {
                alert('Вы ввели НЕВЕРНЫЙ пароль. У вас осталось ' + (totalPassAttempts - passAttempts) + ' попыток');
            }

            passAttempts += 1;
        }
    }
});