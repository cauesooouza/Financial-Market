import Content from 'Components/Content'
import Main from 'Layouts/Main'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import styles from './notfound.module.scss'

export default function NotFound() {
  const nav = useNavigate()
  return (
    <>
      <Helmet>
        <title>
          Financial Market | 404 Not Found
        </title>
      </Helmet>
      <Main direction='column'>
        <Content>
          <div className={styles.notfound}>
            <h1>
              Oops!
            </h1>
            <h3>404 - Page not found</h3>
            The page you are looking for is not found.
            <button onClick={() => nav(-1)} className={styles.back_button}>back</button>
          </div>
        </Content>
      </Main>
    </>
  )
}
