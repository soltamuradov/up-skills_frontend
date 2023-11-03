import React from 'react';

const AddQuestions = React.lazy(() => import('addquestions/App'))
const QuestionsList = React.lazy(() => import('questionslist/App'))

const App = () => {
  return (
    <div>
      I am host
      <div>
        <AddQuestions/>
        <QuestionsList/>
      </div>
    </div>
  );
};

export default App;