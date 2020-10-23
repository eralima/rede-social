import React from "react"
import Header from "../../components/Header"
import Feed from "../../components/Feed"

import "./Home.css"

const Home = () => {
  return(
      <main className="Home">
          <Header />
          {/* <Stories /> */}
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          {/* <Suggestions /> */}
      </main>
  )
}

export default Home