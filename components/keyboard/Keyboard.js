import { useTranslation } from 'next-i18next';
import KeyboardRow from './keyBoardRow';

function Keyboard({ setKey, keyboardRef }) {
  const { t } = useTranslation();
  const keyboardTranslations = t('keyboard', { returnObjects: true });
  return (
    <div id="Keyboard" ref={keyboardRef} className="flex flex-col my-10">
      {keyboardTranslations.map((row) => <KeyboardRow key={row.id} rowLine={row} setKey={setKey} />)}
    </div>
  );
}

export default Keyboard;
