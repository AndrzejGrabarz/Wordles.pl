import { useTranslation } from 'next-i18next';

function InstructionCard() {
  const { t } = useTranslation('common');
  return (
    <div id="InstructionCard" className="InstructionCard flex flex-col  items-center max-w-xl h-[620px] mb-2">

      <div id="grey-background1" className="bg-[#e5ecff] w-full text-center p-2 rounded-md">
        <h1 className="font-semibold text-xl sm:text-2xl">{t('instruction.header')}</h1>
      </div>

      <div className="flex flex-col  items-center my-2 p-2">
        <p className="text-center text-md sm:text-lg">{t('instruction.rule1')}</p>
        <br />
        <p className="text-center text-md sm:text-lg">{t('instruction.rule2')}</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">{t('instruction.word.letter1')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">{t('instruction.word.letter2')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">{t('instruction.word.letter3')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">{t('instruction.word.letter4')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.word.letter5')}</span>
        </div>

        <div id="grey-background2" className="flex flex-col justify-center bg-[#edf0f5] black border-1   h-32 sm:h:36 rounded-md my-1 py-1 px-3">

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">{t('instruction.frame.incorect.letter1')}</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">{t('instruction.frame.incorect.letter2')}</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>{t('instruction.frame.incorect.text')}</p></span>
          </div>

          <div className="flex flex-row items-centeritems-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">{t('instruction.frame.almost.letter1')}</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">{t('instruction.frame.almost.letter2')}</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>{t('instruction.frame.almost.text')}</p></span>
          </div>

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-green-600 rounded-md font-semibold">{t('instruction.frame.corect.letter1')}</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>{t('instruction.frame.corect.text')}</p></span>
          </div>

        </div>
        <p className="text-center text-lg my-1">{t('instruction.underframe.text')}</p>

        <div className="flex items-center justify-center my-1 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.incorect.letter1')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.incorect.letter2')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.incorect.letter3')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">{t('instruction.underframe.incorect.letter4')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">{t('instruction.underframe.incorect.letter5')}</span>
        </div>

        <p className="text-center text-md sm:text-lg ">{t('instruction.underframe.incorect.text')}</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.corect.letter1')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.corect.letter2')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.corect.letter3')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.corect.letter4')}</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">{t('instruction.underframe.corect.letter5')}</span>
        </div>
        <p className="text-center text-md sm:text-lg">{t('instruction.underframe.corect.text')}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
