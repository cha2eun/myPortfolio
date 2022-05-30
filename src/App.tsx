import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import Main from './components/main';
import SubPage from './components/subPage';
import NotFound from './components/notFound';
function App() {
  const history=useHistory();
  React.useEffect(() => {
    history.push('/main');
  }, [])
  return (
    <>
    <Switch>
      <Route path="/main" component={Main}/>
      <Route path="/subPage" component={SubPage}/>
      <Route path="/" component={Main}/>
    </Switch>
    </> 
  );
}

export default App;
