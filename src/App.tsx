import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import Main from './components/main';
import SubPage from './components/subPage';

function App() {
  const history=useHistory();
  React.useEffect(() => {
    history.push('/myPortfolio/main');
  }, [])
  return (
    <>
    <Switch>
      <Route path="/myPortfolio/main" component={Main}/>
      <Route path="/myPortfolio/subPage" component={SubPage}/>
    </Switch>
    </> 
  );
}

export default App;
