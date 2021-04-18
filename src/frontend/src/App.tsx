import React from 'react'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
import './App.sass'
import { CategoryTab } from './components/fundamental/navigation/category-tab/category-tab'
import Image from './assets/img/categories/hungary.jpg'


function Menu(props: any): JSX.Element {
  const { url, path } = useRouteMatch()

  return (
    <div>
      <p>MENU</p>
      <CategoryTab src={Image} alt='hungary' baseurl={url} category='hungary'></CategoryTab>
      <CategoryTab src={Image} alt='japan' baseurl={url} category='japan'></CategoryTab>
      <Switch>
        <Route path={`${path}/:category/:filter?`} component={(props: { match: any }) => { return <span>{props.match.params.category}{props.match.params.filter}</span>}} />
      </Switch>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/menu' component={Menu} />
          <Route path='/profile' component={() => { return <p>profile</p>}} />
          <Route exact path='/' component={() => { return <p>Home</p>}} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
