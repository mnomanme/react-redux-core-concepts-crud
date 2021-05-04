import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import { Navbar } from './components/elements/Navbar';
import store from './store';
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route
                exact
                path="/contacts/edit/:id"
                component={EditContact}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
   
  );
}

export default App;
