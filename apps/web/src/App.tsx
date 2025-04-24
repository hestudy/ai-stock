import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './router';

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
