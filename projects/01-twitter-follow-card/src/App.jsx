import "./index.css"

import TwitterFollowCard from "./TwitterFollowCard"

const App = () => {
  return (
    <div className="App">
      <TwitterFollowCard 
        userName="Martinpdisalvo"
        name="Coscu"
        initialIsFollowing
      />
      <TwitterFollowCard 
        userName="PlayStation"
        name="PlayStation"
        isVerified
      />
      <TwitterFollowCard 
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard />
    </div>
  )
}

export default App