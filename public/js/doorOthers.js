// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door0(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_pressed')) {
                isOpened = false;
            }
        });

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}

// Наследуемся от класса DoorBase
Door0.prototype = Object.create(DoorBase.prototype);
Door0.prototype.constructor = DoorBase;
// END ===================== Пример кода первой двери =======================

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door1(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия второй двери здесь ====
    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4'),
        this.popup.querySelector('.door-riddle__button_5'),
        this.popup.querySelector('.door-riddle__button_6'),
        this.popup.querySelector('.door-riddle__button_7'),
        this.popup.querySelector('.door-riddle__button_8'),
        this.popup.querySelector('.door-riddle__button_9')
    ];
    var inputs = [
        this.popup.querySelector('.door-riddle__input_0'),
        this.popup.querySelector('.door-riddle__input_1'),
        this.popup.querySelector('.door-riddle__input_2'),
        this.popup.querySelector('.door-riddle__input_3'),
        this.popup.querySelector('.door-riddle__input_4'),
        this.popup.querySelector('.door-riddle__input_5'),
    ];
    var currentButton = null;
    var currentInputIndex = 0;

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerover', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerLeave.bind(this));
    }.bind(this));

    this.popup.addEventListener('pointerup', _onButtonPointerUp.bind(this));

    function _onButtonPointerDown(e) {
        if (currentInputIndex < 6 && inputs[currentInputIndex] !== undefined) {
            e.target.classList.add('door-riddle__button_pressed');

            if (currentButton !== e.target) {
                var input = inputs[currentInputIndex];
        
                currentButton = e.target;
                input.innerHTML = input.innerHTML + e.target.innerHTML;
                currentInputIndex = currentInputIndex + 1;
            }
        }
    }

    function _onButtonPointerUp(e) {
        buttons.forEach(function(b) {
            b.classList.remove('door-riddle__button_pressed');
        });
        currentButton = null;
        currentInputIndex = 0;
        checkCondition.apply(this);
        inputs.forEach(function(i) {
            i.innerHTML = '';
        });
    }

    function _onButtonPointerLeave(e) {
        currentButton = null;
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var answer = inputs.reduce(function(str, i) {
            return str + i.innerHTML;
        }, '');

        var isOpened =
            answer[0] !== '0' &&
            answer.length === 6 &&
            isPrime(Number(answer));

        // Если набранное число шестизначное и простое, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }

    function isPrime(number) {
        var result = true;

        if (number < 2) {
            return false;
        }

        for (var i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                result = false;
            }
        }

        return result;
    }
    
    // ==== END Напишите свой код для открытия второй двери здесь ====
}
Door1.prototype = Object.create(DoorBase.prototype);
Door1.prototype.constructor = DoorBase;

/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door2(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия второй двери здесь ====
    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1')
    ];
    var inputs = [
        this.popup.querySelector('.door-riddle__input_0'),
        this.popup.querySelector('.door-riddle__input_1'),
        this.popup.querySelector('.door-riddle__input_2'),
        this.popup.querySelector('.door-riddle__input_3'),
        this.popup.querySelector('.door-riddle__input_4'),
        this.popup.querySelector('.door-riddle__input_5'),
    ];
    var currentButton = null;
    var currentInputIndex = 0;

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerover', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerLeave.bind(this));
    }.bind(this));

    this.popup.addEventListener('pointerup', _onButtonPointerUp.bind(this));

    function _onButtonPointerDown(e) {
        if (currentInputIndex < 6 && inputs[currentInputIndex] !== undefined) {
            e.target.classList.add('door-riddle__button_pressed');

            if (currentButton !== e.target) {
                var input = inputs[currentInputIndex];
        
                currentButton = e.target;
                input.innerHTML = input.innerHTML + e.target.innerHTML;
                currentInputIndex = currentInputIndex + 1;
            }
        }
    }

    function _onButtonPointerUp(e) {
        buttons.forEach(function(b) {
            b.classList.remove('door-riddle__button_pressed');
        });
        currentButton = null;
        currentInputIndex = 0;
        checkCondition.apply(this);
        inputs.forEach(function(i) {
            i.innerHTML = '';
        });
    }

    function _onButtonPointerLeave(e) {
        currentButton = null;
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var answer = inputs.reduce(function(str, i) {
            return str + i.innerHTML;
        }, '');

        var isOpened =
            answer.length === 6 &&
            isPrime(parseInt(answer, 2));

        // Если набранное число шестизначное и простое, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }

    function isPrime(number) {
        var result = true;

        if (number < 2) {
            return false;
        }

        for (var i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                result = false;
            }
        }

        return result;
    }
    
    // ==== END Напишите свой код для открытия второй двери здесь ====
}
Door2.prototype = Object.create(DoorBase.prototype);
Door2.prototype.constructor = DoorBase;

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Box(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия сундука здесь ====
    // Для примера сундук откроется просто по клику на него
    this.popup.addEventListener('click', function() {
        this.unlock();
    }.bind(this));
    // ==== END Напишите свой код для открытия сундука здесь ====

    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
