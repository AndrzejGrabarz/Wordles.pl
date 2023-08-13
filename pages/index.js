import {
  useEffect, useState, useContext, useRef,
} from 'react';
import Image from 'next/image';
import Poland from '@/public/Poland.png';
import UK from '@/public/UK.png';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import Nightmode from '@/components/buttons/Nightmode';
import SettingsButtonEng from '@/components/buttons/SettingButtonEng';
import SettingsButtonPol from '@/components/buttons/SettingButtonPol';
import RestartGame from '@/components/buttons/RestartGame';
import Instruction from '@/components/buttons/Instruction';
import InstructionCardEng from '@/components/board/InstructionCardEng';
import InstructionCardPol from '@/components/board/InstructionCardPol';
import wordListPolish from '@/public/słownik_lista.json';
import wordListEnglish from '@/public/english_dicionary.json';
import CustomAlert from '@/components/alerts/CustomAlert';
import CustomConfirmWin from '@/components/alerts/CustomConfirmWin';
import CustomConfirmLose from '@/components/alerts/CustomConfirmLose';
import { ColNumContext } from '@/utils/SettingsContext';
import {
  ALLOWED_LETTERS,
  ROW_COUNT,
} from '@/utils/variables';

const SPECIAL_KEYS = ['Enter', 'Delete', 'Backspace', 'Altgraph', 'Control'];
const LAST_ROW = ROW_COUNT - 1;

export default function Home() {
  const [NumberOfColumn, setNumberOfColumn] = useContext(ColNumContext);
  const [board, setBoardState] = useState(Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  const [word, setWord] = useState('');
  const [dicionary, setDicionary] = useState([]);
  const [key, setKey] = useState({ letter: '' });
  const isSpecialKey = (letter) => SPECIAL_KEYS.includes(letter);
  const isGameFinish = useRef(false);
  const [selectedLanguage, setselectedLanguage] = useState('polish');
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter);
  }

  const ListOfXPolishLetterWords = wordListPolish.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const ListOfXEnglishLetterWords = wordListEnglish.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const gameWord = ListOfXPolishLetterWords[Math.floor(Math.random() * ListOfXPolishLetterWords.length)];

  const losFromDictionary = dicionary[Math.floor(Math.random() * dicionary.length)];

  useEffect(() => {
    setDicionary(ListOfXPolishLetterWords);
    setWord(gameWord);
  }, []);

  useEffect(() => {
    function handleKeyPress(event) {
      console.log('Wciśnięto klawisz:', event.key);
      if (isGameFinish.current) {
        document.removeEventListener('keydown', handleKeyPress);
        return;
      }
      const letter = event.key;
      if (isAllowedLetter(letter)) {
        setKey({ letter });
      }
    }

    // Dodaj nasłuchiwanie na zdarzenie wciśnięcia klawisza
    document.addEventListener('keydown', handleKeyPress);

    // Opcjonalnie: usuń nasłuchiwanie po odmontowaniu komponentu
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [key]);

  const updateBoard = (letter) => {
    const updatedBoard = [...board];
    let updatedCurrentObject = currentObject;
    if (updatedCurrentObject >= NumberOfColumn - 1) { updatedCurrentObject = NumberOfColumn - 1; }
    if (board[currentRow][NumberOfColumn - 1].value === '') {
      updatedBoard[currentRow][updatedCurrentObject] = {
        value: letter,
        state: '',
      };
    }
    setBoardState(updatedBoard);
    setCurrentObject(updatedCurrentObject + 1);
  };

  function isWordCorrect() {
    const USER_WORD = board[currentRow].map((letter) => letter.value).join('');
    return USER_WORD === word;
  }

  function compare() {
    const WORD_DRAFTED = word.split('');
    const USER_WORD = board[currentRow].map((letter) => letter.value); 
    const currentRowState = board[currentRow];

    // const usedLetter = document.querySelectorAll(
    //   board[currentRow].map((letter) => `#${letter.value}`).join(', '),
    // );
    // usedLetter.forEach((letter) => {
    //   letter.style.backgroundColor = 'grey';

    //   if(WORD_DRAFTED.includes(letter[index]))
    // });
    // const array = [];
    // usedLetter.forEach((letter, index) => {
    //   array.push(letter.innerHTML);
    //   switch (true) {
    //     case WORD_DRAFTED.includes(array[index]):
    //       letter.style.backgroundColor = '#84cc16';
    //       break;
    //     case !WORD_DRAFTED.includes(array[index]):
    //       letter.style.backgroundColor = '#9ca3af';
    //       break;
    //     default:
    //   }
    // });

    currentRowState.map((object, index) => {
      const elementStyle = window.getComputedStyle(document.getElementById(object.value));
      const currentBackgroundColor = elementStyle.backgroundColor;
      switch (true) {
        case WORD_DRAFTED[index] === USER_WORD[index]:
          object.state = 'green';
          document.getElementById(object.value).style.backgroundColor = 'green';
          break;
        case WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'yellow';
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            document.getElementById(object.value).style.backgroundColor = 'green';
          } else {
            document.getElementById(object.value).style.backgroundColor = 'yellow';
          }
          break;
        case !WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'grey';
          document.getElementById(object.value).style.backgroundColor = '#6b7280';
          break;
        default:
      }
    });
  }

  function endGame() {
    setBoardState(
      Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))),
    );
    setWord(losFromDictionary);
    setCurrentObject(0);
    setCurrentRow(0);
    const KeyboardAnimation = document.querySelectorAll('#q, #w, #e, #r, #t, #y, #u, #i, #o, #p,#a, #s, #d, #f, #g, #h, #j, #k, #l,#z, #x, #c, #v, #b, #n, #m, #ą, #ć, #ę, #ł, #ń, #ó, #ś, #ź, #ż');

    KeyboardAnimation.forEach((id) => {
      id.style.backgroundColor = '#e1e0e0';
    });
    setKey({ letter: '' });
    isGameFinish.current = false;
  }

  function giveAllLetters() {
    const USER_WORD = board[currentRow].map((letter) => letter.value);
    return USER_WORD.includes('');
  }

  
  const showAlertNotEnoughLetters = () => {
    console.log(document.getElementById('letter-alert'));
    const Custom = document.getElementById('letter-alert');
    Custom.classList.toggle('showObject');
  };

  const showAlertMissingFromTheDicionary = () => {
    const Custom = document.getElementById('dicionary-alert');
    Custom.classList.toggle('showObject');
  };

  // ===================== Confirm Section
  const showConfirmWinGameWindow = () => {
    const Custom = document.getElementById('confirm-win');
    Custom.classList.toggle('showObject');
  };

  const showConfirmLoseGameWindow = () => {
    const Custom = document.getElementById('confirm-lose');
    Custom.classList.toggle('showObject');
  };

  const closeConfirmWinGameWindow = () => {
    const Custom = document.getElementById('confirm-win');
    Custom.classList.toggle('showObject');
    endGame();
  };

  const closeConfirmLoseGameWindow = () => {
    const Custom = document.getElementById('confirm-lose');
    Custom.classList.toggle('showObject');
    endGame();
  };
  // ===================== Confirm Section

  function verifyState() {
    if (giveAllLetters()) {
      showAlertNotEnoughLetters();
      setTimeout(() => {
        showAlertNotEnoughLetters();
      }, 2000);
      return;
    }
    // Sprawdzenie
    const typedWord = board[currentRow].map((letter) => letter.value).join('');

    if (!dicionary.includes(typedWord)) {
      showAlertMissingFromTheDicionary();
      setTimeout(() => {
        showAlertMissingFromTheDicionary();
      }, 2000);
      return;
    }

    if (isWordCorrect()) {
      compare();
      setTimeout(() => {
        showConfirmWinGameWindow();
        isGameFinish.current = true;
      }, 2200);
    }
    if (!isWordCorrect() && currentRow === LAST_ROW) {
      compare();
      setTimeout(() => {
        showConfirmLoseGameWindow();
        isGameFinish.current = true;
      }, 2200);
    } else {
      compare();
    }
    setCurrentRow(currentRow + 1);
    setCurrentObject(0);
  }

  const deleteLetter = () => {
    const updatedBoard = [...board];
    let objcetToDelete = currentObject - 1;
    if (objcetToDelete < 0) objcetToDelete = 0;
    updatedBoard[currentRow][objcetToDelete].value = '';
    setBoardState(updatedBoard);
    setCurrentObject(objcetToDelete);
  };

  useEffect(() => {
    if (key.letter === '') return;
    if (!isSpecialKey(key.letter)) {
      updateBoard(key.letter);
    } else if (key.letter === 'Delete' || key.letter === 'Backspace') {
      deleteLetter();
    } else if (key.letter === 'Enter') {
      verifyState();
    }
  }, [key]);

  const Polish = () => {
    setselectedLanguage('polish');
    setDicionary(ListOfXPolishLetterWords);
    endGame();
  };
  const English = () => {
    setselectedLanguage(() => { 'english'; });
    setDicionary(ListOfXEnglishLetterWords);
    endGame();
  };

  return (
    <div id="main" className="flex items-center justify-center flex-col min-h-screen p-2">
      <div className="flex items-center justify-center w-2/5   my-5 rounded-md">
        <div className="flex my-4">
          <Nightmode />
          <RestartGame
            setCurrentRow={setCurrentRow}
            setCurrentObject={setCurrentObject}
            setBoardState={setBoardState}
            setWord={setWord}
            word={word}
            ROW_COUNT={ROW_COUNT}
            NumberOfColumn={NumberOfColumn}
          />
          <Instruction />
          {selectedLanguage === 'polish' ? <SettingsButtonPol /> : <SettingsButtonEng />}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-2">
          <button type="button" onClick={Polish}>
            <div>
              <Image
                src={Poland}
                width={35}
                height={25}
                alt="Flag of Poland"
              />
            </div>
          </button>
        </div>
        <div>
          <button type="button" onClick={English}>
            <div>
              <Image
                src={UK}
                width={35}
                height={25}
                alt="Flag of England"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="relative">
        <Board board={board} />
        <div id="letter-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          {selectedLanguage === 'polish' ? <CustomAlert text="Musisz podać wszystkie pięć liter" /> : <CustomAlert text="You must give all five letters" />}
        </div>
        <div id="dicionary-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          {selectedLanguage === 'polish' ? <CustomAlert text="Brak w słowniku" /> : <CustomAlert text="Missing from the dictionary" />}
        </div>
        <div id="confirm-win" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomConfirmWin text="You win!!!" />
          <div className="flex justify-center">
            <button onClick={closeConfirmWinGameWindow} className="font-mono my-4  py-3 px-5 bg-green-400 rounded-md text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">Try again</button>
          </div>
        </div>
        <div id="confirm-lose" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium  text-center">
          <CustomConfirmLose word={word} text="You lose :(" />
          <div className="flex justify-center">
            <button onClick={closeConfirmLoseGameWindow} className="font-mono py-3 px-5 mb-4 bg-green-400 rounded-md text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">Try again</button>
          </div>
        </div>
      </div>
      {selectedLanguage === 'polish' ? <InstructionCardPol /> : <InstructionCardEng />}
      <Keyboard setKey={setKey} selectedLanguage={selectedLanguage} />
    </div>
  );
}
