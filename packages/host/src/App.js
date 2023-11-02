import React from 'react';

const AddQuestions = React.lazy(() => import('addquestions/App'))

const App = () => {
  return (
    <div>
      I am host
      <div>
        <AddQuestions/>
      </div>
    </div>
  );
};

export default App;