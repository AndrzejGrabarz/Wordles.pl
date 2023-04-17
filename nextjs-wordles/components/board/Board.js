import React from 'react';
import Row from './Row';
import { useState, useEffect } from 'react';

const BOARD_SIZE = [0, 1, 2, 3, 4, 5];
const CORRECT_WORD = 'GORYL';

function Board({
  keyboardKey,
  setKeyboardKey,
  specialKeyboardKey,
  setSpecialKeyboardKey,
}) {
  const [boardState, setBoardState] = useState([[], [], [], [], [], []]);
  const [word, setWord] = useState('');

  //======================================================
  // Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
  //======================================================

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Naciśnięto klawisz: ' + event.key);
      setKeyboardKey(event.key.toUpperCase());
    };
    document.addEventListener('keypress', handleKeyPress);
  });

  //======================================================
  // Funkcja Save - wprowadzanie liter do tablicy
  //======================================================

  useEffect(() => {
    if (word.length >= 5 && specialKeyboardKey !== 'Enter') {
      // warunek nie pozwala przejść do następnej tablicy jeśli slowo nie będzie miało 5 liter  i nie będzie stan "Enter "
      return;
    }
    updateBoard();
  }, [keyboardKey]);

  const updateBoard = () => {
    if (keyboardKey !== '') {
      // PROGRAM WPROAWADZA DWA PUSTE STRINGI DO TABELI
      const updateArray = [...boardState];
      const currentTable = updateArray.findIndex((arr) => arr.length < 5);

      if (currentTable !== -1) {
        updateArray[currentTable].push(keyboardKey);

        console.log(updateArray[currentTable]);
        console.log(updateArray[currentTable].length);
      }

      setBoardState(updateArray);
      console.log(updateArray);
    }
  };

  //======================================================
  // Sprawdzenie checkWord
  //======================================================

  //* Funkcja letterUpdate dodaje do word litery

  useEffect(() => {
    if (word.length >= 5) {
      // Oprócz warunku w funkcji save na długość słowa, musiałem też ograniczyć ilość dodawanych liter, po uzupełnieniu 5 pól, litery nie pojawiały sie na Bordzie ale ciągle były dodwane do "word" w pamieci i w momencie zatwierdzenia słowa dochodziło do słego porównania poniewaz litery na pordzie nie odpowiadały literom "word" w pamieci
      return;
    }
    letterUpdate();
  }, [keyboardKey]);

  function letterUpdate() {
    setWord(word + keyboardKey);
  }

  /*
   *Funkcja checkWord - Sprawdza czy wpisane przez nas słowo zgadza się ze zmienną CORRECT_WORD
    !Funkcjonalność do przegadanie
      ^Funkcja odpala się tylko przy zmianie stanu w specialKeyboardKey guzikami zpecjalnymi które zmieniają ten stan to "Enter" i "Delet"
   */

  useEffect(() => {
    if (specialKeyboardKey === '') {
      return;
    }
    checkWord();
  }, [specialKeyboardKey]);

  function checkWord() {
    let typedWord = word;
    if (typedWord !== CORRECT_WORD) {
      // Czemu nie równe
      alert('Nie wygrałeś');
    } else {
      alert('Wygrałeś');
    }
    setWord('');
    setSpecialKeyboardKey('');
  }

  return (
    <>
      <div className="flex flex-col">
        {BOARD_SIZE.map((row) => {
          return (
            <Row
              RowId={BOARD_SIZE[row]}
              keyboardKey={keyboardKey}
              setKeyboardKey={setKeyboardKey}
              array={boardState}
            />
          );
        })}
      </div>
      <div> {boardState} </div>
    </>
  );
}

export default Board;
