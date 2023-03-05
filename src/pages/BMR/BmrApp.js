import BMRform from './components/BMRform';
import BackButton from '../BackButton';

const style = {
  page: 'flex ',
  content: 'flex lg:w-[60vw] w-[90vw] flex flex-col justify-start m-auto my-[10vh] lg:h-[80vh] md:h-[100vh] h-full',
  title: 'font-bold text-center lg:text-[50px] text-[40px]',
  description: 'lg:text-[25px] text-[18px] text-center',
  tablediv: 'flex justify-center' ,
  recommandation: 'mt-10 w-[80%] text-center lg:text-[20px] text-[18px] m-auto'
}

function BmrApp() {
  return (
    <>
    <BackButton/>
    <div className='bg-slate-300 h-[100vh] overflow-hidden'>
    <div className={style.page}>
      <div className={style.content}>
        <p className={style.title}>BMR Calculator</p>
        <p className={style.description}>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate: the amount of energy expended while at rest in a neutrally temperate environment. </p>
        <div className={style.tablediv}>
          <BMRform />       
        </div>
        <p className={style.recommandation}>Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.</p>
      </div>
    </div>
      </div>
    </>
  );
}

export default BmrApp;
