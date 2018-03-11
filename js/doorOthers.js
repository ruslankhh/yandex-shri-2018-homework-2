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

    // ==== Напишите свой код для открытия третьей двери здесь ====
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
    
    // ==== END Напишите свой код для открытия третьей двери здесь ====
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
    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4'),
        this.popup.querySelector('.door-riddle__button_5')
    ];
    var buttonContainer = this.popup.querySelector('.door-riddle__button-container');
    var buttonContainerOffset = getOffset(buttonContainer);
    var inputs = [
        this.popup.querySelector('.door-riddle__input_0'),
        this.popup.querySelector('.door-riddle__input_1'),
        this.popup.querySelector('.door-riddle__input_2')
    ];
    var inputContainer = this.popup.querySelector('.door-riddle__input-container');
    var inputContainerOffset = getOffset(inputContainer);
    var currentButton = null;
    var currentInput = null;
    var shifts = [];
    var offsets = [];
    var inputsPos = [];
    
    inputs.forEach(function(input, index) {
        var inputOffset = getOffset(input);

        inputsPos[index] = {
            left: inputOffset.left + inputContainerOffset.left,
            top: inputOffset.top + inputContainerOffset.top,
            right: inputOffset.left + inputContainerOffset.left + input.offsetWidth,
            bottom: inputOffset.top + inputContainerOffset.top + input.offsetHeight
        };
    });

    buttons.forEach(function(b, index) {
        var buttonOffset = getOffset(b);

        offsets[index] = {
            left: buttonOffset.left + buttonContainerOffset.left,
            top: buttonOffset.top + buttonContainerOffset.top
        };

        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointermove', _onButtonPointerMove.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerLeave.bind(this));
    }.bind(this));

    inputs.forEach(function(input, index) {
        var style =
            'position: absolute; ' +
            'left: ' + inputsPos[index].left + 'px; ' +
            'top: ' + inputsPos[index].top + 'px';

        input.setAttribute('style', style);
        input.parentNode.parentNode.appendChild(input);
    });

    buttons.forEach(function(b, index) {
        var style =
            'position: absolute; ' +
            'left: ' + offsets[index].left + 'px; ' +
            'top: ' + offsets[index].top + 'px';

        b.setAttribute('style', style);
        b.parentNode.parentNode.appendChild(b);
    });

    this.popup.addEventListener('pointerup', _onButtonPointerUp.bind(this));

    function _onButtonPointerDown(e) {
        var index = buttons.findIndex(function(b) {
            return b === e.target;
        });
        var box = e.target.getBoundingClientRect();
        shifts[index] = {
            left: e.pageX - (box.left + pageXOffset),
            top: e.pageY - (box.top + pageYOffset)
        };

        e.target.setPointerCapture(e.pointerId);

        e.target.classList.add('door-riddle__button_pressed');
    }

    function _onButtonPointerMove(e) {
        var index = buttons.findIndex(function(b) {
            return b === e.target;
        });

        if (shifts[index]) {
            var parentBox = e.target.parentNode.getBoundingClientRect();
            var parentX = parentBox.left + pageXOffset;
            var parentY = parentBox.top + pageYOffset;
            var left = e.pageX - parentX - shifts[index].left;
            var top = e.pageY - parentY - shifts[index].top;

            var style =
                'position: absolute;' +
                'left: ' + left + 'px;' +
                'top: ' + top + 'px';

            e.target.setAttribute('style', style);

            var maxIntersection = 0;
            var elemOffset = getOffset(e.target);
            var elemPos = {
                left: elemOffset.left,
                top: elemOffset.top,
                right: elemOffset.left + e.target.offsetWidth,
                bottom: elemOffset.top + e.target.offsetHeight
            };
            var prevInput = currentInput;

            inputs.forEach(function(input, i) {
                input.classList.remove('door-riddle__input_hover');
            });

            inputs.forEach(function(input, i) {
                var value = input.dataset.value;
                
                if (value === undefined || value === null) {
                    var intersection = getIntersection(elemPos, inputsPos[i]);

                    if (intersection > maxIntersection) {
                        maxIntersection = intersection;
                        currentInput = input;
                    }
                }
            });

            if (maxIntersection === 0) {
                currentInput = null;
            }

            if (
                prevInput &&
                prevInput.dataset.buttonIndex === index.toString() &&
                prevInput !== currentInput
            ) {
                delete prevInput.dataset.buttonIndex;
            }

            if (currentInput) {
                currentInput.classList.add('door-riddle__input_hover');
            }
        }
    }

    function _onButtonPointerUp(e) {
        var index = buttons.findIndex(function(b) {
            return b === e.target;
        });

        buttons.forEach(function(b) {
            b.classList.remove('door-riddle__button_pressed');
        });
        inputs.forEach(function(input) {
            input.classList.remove('door-riddle__input_hover');
        });

        e.target.releasePointerCapture(e.pointerId);

        if (e.target.classList.contains('door-riddle__button')) {
            if (currentInput) {
                var currentInputIndex = inputs.findIndex(function(input) {
                    return input === currentInput;
                });
                var pos = inputsPos[currentInputIndex];

                currentInput.dataset.buttonIndex = index;

                move(e.target, pos, null, checkCondition.bind(this));
            } else {
                move(e.target, offsets[index], null, checkCondition.bind(this));
            }
        } else {
            checkCondition.apply(this);
        }

        currentButton = null;
        shifts[index] = null;
    }

    function _onButtonPointerLeave(e) {
        currentButton = null;
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var answer = inputs.reduce(function(str, input) {
            var index = input.dataset.buttonIndex;

            if (index !== undefined) {
                return str + buttons[index].innerHTML;
            } else {
                return str;
            }
        }, '');

        var isOpened =
            answer.length === 3 &&
            isPrime(parseInt(answer, 16));

        // Если набранное число шестизначное и простое, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }

    function move(elem, props, duration, cb) {
        var offset = getOffset(elem);
        var id = setInterval(frame, 10);

        duration = duration || 400;

        var steps = {
            left: (props.left - offset.left) * 10 / duration,
            top: (props.top - offset.top) * 10 / duration
        };

        elem.classList.add('door-riddle__button_onmove');

        function frame() {
            offset.left = offset.left + steps.left;
            offset.top = offset.top + steps.top;
            elem.style.left = offset.left + 'px';
            elem.style.top = offset.top + 'px';

            if (
                Math.abs(Math.round(offset.left - props.left)) <= 0.1 &&
                Math.abs(Math.round(offset.top - props.top)) <= 0.1
            ) {
                elem.classList.remove('door-riddle__button_onmove');
                clearInterval(id);
                cb();
            }
        }
    }

    function getIntersection(elemPos, inputPos) {
        var width = Math.min(elemPos.right, inputPos.right) - Math.max(elemPos.left, inputPos.left);
        var height = Math.min(elemPos.bottom, inputPos.bottom) - Math.max(elemPos.top, inputPos.top);

        return Math.max(0, width) * Math.max(0, height);
    }

    function getOffset(elem) {
        var elemBox = elem.getBoundingClientRect();
        var parentBox = elem.parentNode.getBoundingClientRect();
        
        return {
            left: elemBox.left - parentBox.left,
            top: elemBox.top - parentBox.top
        };
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
    // ==== END Напишите свой код для открытия сундука здесь ====
    
    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
