import { Toaster } from 'sonner';
import './App.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
