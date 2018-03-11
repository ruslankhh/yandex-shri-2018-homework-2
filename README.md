# Домашнее задание "Работа с сенсорным пользовательским вводом"

Домашнее задание #2 в ШРИ Яндекса 2018.

Сайт: [http://ruslankhh.com/yandex-shri-2018-homework-2](http://ruslankhh.com/yandex-shri-2018-homework-2)

## Задание

Реализация пользовательских жестов в рамках игры «Dungeon of Doom».

Прохождение игры состоит из последовательного открытия дверей и в конце открытия сундука. Каждая дверь представляет из себя мини-загадку для решения которой игрок должен сделать какой-либо жест. Жесты могут быть как для одного указателя, так и для нескольких.

Для открытия первой двери игрок должен одновременно зажать три кнопки, чтобы дверь открылась. Это невозможно сделать на компьютере, поэтому пройти эту дверь можно только с мобильного устройства с multi-touch (т.е. с помощью любого смартфона).

Остальные две двери и сундук предлагается реализовать вам. Графическое оформление также можно менять по желанию.

### Основное

- [x] Использование Pointer Events.
- [x] Жест открытия для одной двери.

### Дополнительное

- [x] Сложные жесты, которые будет непросто сделать игроку. Желательно с использованием нескольких указателей (пальцев). Можно вдохновляться играми серии The Room, всевозможными пазлами и загадками в квестах. Например:
  - [ ] Для открытия двери необходимо сдвинуть в разные стороны несколько затворов.
  - [ ] За определенное время покрутить по кругу несколько рычагов.
  - [ ] "Восстановить" механизм открытия двери перемещением шестеренок в соответствующие им пазы.
- [ ] Сделать разные жесты открытия для всех дверей и сундука.

## Выполнение задания

- Для открытия второй двери нужно свайпом набрать простое 6-значное число. 6 знаков не случайны, так как про то, что их нужно набирать свайпом нигде не сказано, а после первой двери пользователь скорее всего попытается зажимать все цифры пальцами. Что у него не выйдет, так как после появления 6-го пальца событие закончиться и набранные цифры сбросятся.
- Для открытия третьей двери так же нужно свайпом набрать простое 6-значное число, но в двоичной форме. Здесь сложность в том, что нужно будет не отрывая пальца набирать несколько подряд идущих одинаковых цифр.
- Для открытия сундука нужно драгом набрать простое 3-х значное число, но в шестнадцатиричной форме. UPD: нашел баг. При наложении кнопок на инпуты, в которых уже есть кнопки в старых инпутах остаются данные от старых кнопок. Что заметно при принятии ответа с незаполненными инпутами.
- Сложные жесты. Возможно для пользователей эти жесты и не будут очень сложными. Но для меня их реализация была довольно таки сложная) Ну и игра сама вышла сложная для прохождения.
- Сделать разные жесты открытия для всех дверей и сундука. Для второй и третьей двери по реализации идёт один и тот же жест, но по его использованию он разный. Не знаю, ставить тут галочку или нет. Я думал сделать ещё какой то жест, но тут по замыслу игры нужно было сделать именно так.
- Много кода. Хотелось разбить всё на несколько файлов, но в задание было ограничение на написание кода после соответсвующих комментариев.
