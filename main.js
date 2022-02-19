function switchBg() {
  const parentElement = document.getElementsByClassName('wrapper')[ 0 ];
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  parentElement.className = 'wrapper bg-'+randomNumber;
}

function isOperator(str) {
  const validOperators = [ '+', '-', '*', '/', 'x', 'X' ];
  return validOperators.includes(str);
}

function isNumber(str) {
  const validNumbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.' ];
  return validNumbers.includes(str);
}

function cmdClear(result) {
  result.value = '';
}

function cmdRemoveLast(result) {
  result.value = result.value.slice(0, -1);
}

function cmdEqual(result) {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = 'Error';
  }
}

function isCommand(str) {
  const validCommands = [ 'C', 'c', '<', '&lt;', '=' ];
  return validCommands.includes(str);
}

function doCommand(cmd, result) {
  const commands = {
    'C': cmdClear,
    'c': cmdClear,
    '<': cmdRemoveLast,
    '&lt;': cmdRemoveLast,
    '=': cmdEqual
  }
  commands[ cmd ](result);
}

window.onload = function () {
  const result = document.getElementsByTagName('input')[ 0 ];
  const buttons = document.getElementsByTagName('button');
  for(let i = 0; i < buttons.length; i++){
    buttons[ i ].addEventListener('click', function () {
      switchBg();
      if (isNumber(buttons[ i ].innerHTML)) {
        result.value += buttons[ i ].innerHTML;
      } else if (isOperator(buttons[ i ].innerHTML)) {
        result.value += buttons[ i ].innerHTML;
      } else if (isCommand(buttons[ i ].innerHTML)) {
        doCommand(buttons[ i ].innerHTML, result);
      }
    })
  }


}