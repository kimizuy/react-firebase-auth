import React from "react"
import { Counter } from "components/Counter"
import utilStyles from "styles/utils.module.css"

function IndexPage() {
  return (
    <div className={utilStyles.App}>
      <header className={utilStyles.AppHeader}>
        <img
          src="/logo.svg"
          className="App-logo"
          alt="logo"
          style={{ height: "150px", width: "150px" }}
        />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={utilStyles.AppLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={utilStyles.AppLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={utilStyles.AppLink}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={utilStyles.AppLink}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default IndexPage
