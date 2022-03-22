import { useSelector } from 'react-redux'

import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

const App = () => {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {loggedIn && <UserProfile />}
      {!loggedIn && <Auth />}
      <Counter />
    </>
  )
}

export default App
