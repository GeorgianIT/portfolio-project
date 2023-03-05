import Quiz from './components/Quiz';
import './quiz.css'
import BackButton from '../BackButton';

function QuizApp() {
  return (
    <>
    <BackButton/>
    <div className="quiz-body">
      <Quiz/>
      </div>
    </>
  );
}

export default QuizApp;
