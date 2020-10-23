import React from "react"
import Header from "../../components/Header"
import Feed from "../../components/Feed"
import Suggestions from "../../components/Suggestions"

import "./Home.css"

const Home = () => {
  return(
      <main className="Home">
          <Header />
          {/* <Stories /> */}
          <div className="teste">
            <div className="feed">
              <Feed />
              <Feed />
              <Feed />
              <Feed />
              <Feed />
            </div>
            <Suggestions />
          </div>   
      </main>
  )
}

export default Home