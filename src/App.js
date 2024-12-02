import './App.css';
import MainPage from "./page/mainPage/MainPage";
import AboutPage from "./page/aboutPage/AboutPage";
import ChangeTitle from "./components/ChangeTitle";
import ContactsPage from "./page/contactsPage/ContactsPage";
import Counter from "./page/counter/Counter";

function App() {
  return (
    <div className="App">
      {/*<MainPage/>*/}
      {/*  <AboutPage/>*/}
      {/*  <ChangeTitle/>*/}
      {/*<ContactsPage/>*/}
        <Counter />
    </div>
  );
}

export default App;
