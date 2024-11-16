import Button from './Button';
import notebook from '../assets/notebook.jpg';
import Quote from '../assets/Quote.jpg';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex items-center justify-between h-screen bg-stone-200 px-8 w-3/4">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-black mb-4 py-2">No Project Selected</h2>
        <p className="text-black text-xl mb-4">Select a project or get started with a new one</p>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </div>
      <div className="flex flex-col items-center justify-start space-y-4 ">
        <img 
          src={notebook} 
          alt="Notebook" 
          className="w-80 h-auto object-contain"
        />
        <img 
          src={Quote} 
          alt="Quote" 
          className="w-80 h-auto object-contain"
        />
      </div>
    </div>
  );
}
