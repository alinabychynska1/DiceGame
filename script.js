/*
addEventListener() приєднує обробник події до елементу window
Перший параметр – DOMContentLoaded – браузер повністю завантажив HTML
Другий параметр - функція, яка буде викликатись при виникненні події
*/
window.addEventListener( 'DOMContentLoaded', function () {
// оголошення зміної в якій - querySelector() повертає CSS селектор .dice-roll
		const buttonRoolDice = document.querySelector( '.dice-roll' );
//створення функції, яка не повертає значень
    function rollDice () {
/*оголошення змінних в яких знаходяться два гральних кубика та результат
document.getElementById - Повертає посилання на елемент за його ідентифікатором
*/
        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const status = document.getElementById( 'status' );
// генерація числа від 1 до 6 на обох кубиках
        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
// розміщення генерованих чисел в HTML
        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
// умовна конструкція для обрання переможця та поміщення результату в HTML
        if ( side1 === side2 ) {
            status.innerHTML = ' Draw!';
        }else if(side1>side2){
					status.innerHTML = 'Player 1 wins!';
				}else{
					status.innerHTML = 'Player 2 wins!';
				}
    }
/* addEventListener() приєднує обробник події до елементу buttonRoolDice
   після нажаття на кнопку відбудеться подія тобто функція rollDice
	 Третій параметр — логічне значення false, яке означає, що подію потрібно закрити
*/
    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false); //Третій параметр — логічне значення false, яке означає, що подію потрібно закрити
