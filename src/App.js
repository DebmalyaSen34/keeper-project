import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import './App.css';
import notes from './notes';

function createNote(note){
  return (
    <Note 
    key={note.key}
    title={note.title}
    content={note.content} />
  );
};

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
};

export default App;
