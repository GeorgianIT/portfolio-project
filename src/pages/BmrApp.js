import BMRform from './components/BMRform';

const style = {
  page: 'flex bg-neutral-300',
  content: 'w-[60vw] flex flex-col justify-start m-auto my-[10vh] bg-neutral-300 h-[80vh]',
  title: 'font-bold text-center text-[50px]',
  description: 'text-[25px]',
  tablediv: 'flex justify-center',
  recommandation: 'mt-10 text-center text-[20px]'
}

function BmrApp() {
  return (
    <div className={style.page}>
      <div className={style.content}>
        <p className={style.title}>BMR Calculator</p>
        <p className={style.description}>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate: the amount of energy expended while at rest in a neutrally temperate environment </p>
        <div className={style.tablediv}>
          <BMRform />       
        </div>
        <p className={style.recommandation}>Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.</p>
      </div>
    </div>
  );
}

export default BmrApp;
