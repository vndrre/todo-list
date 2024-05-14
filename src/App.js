import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-[#353632] to-[#222420] p-10'>
      <h1 className="text-center font-bold text-[#e0ded7] md:text-7xl text-4xl">What are you up to Today?</h1>
      <div className="flex justify-center mt-10">
        <TodoList/>
      </div> 
    </div>
  );
}

export default App;
