import ALink from 'Components/ALink'
import Content from 'Components/Content'
import SideNav from 'Components/Sidenav'
import Main from 'Layouts/Main'
import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './faq.module.scss'

export default function Faq() {
  return (
    <>
      <Helmet>
        <title>
          Financial Market | FAQ
        </title>
      </Helmet>
      <Main>
        <Content>
          <div className={styles.faq}>
            <h2>Frequently asked questions</h2>

            <ol>
              <li>
                Which techs did you used?
              </li>
              <p>
                React, Sass & Node.
              </p>
              <li>
                What is the porpuse of that project?
              </li>
              <p>
                I built that application to practice my react skills,
                so, that project is just education purpose.
              </p>
              <li>
                Can i use the code?
              </li>
              <p>
                Of course, you're welcome, look my github.
              </p>
              <li>
                How can i reach you?
              </li>
              <p>
                you can send email <ALink path='/contact'>here</ALink>,
                or send me dm in <a href="https://www.linkedin.com/in/caue-souza-a1546245/" target='_blank' title='linkedin' rel="nofollow noreferrer">likedin</a>
              </p>
              <li>
                Informations that contains here is true?
              </li>
              <p>
                Yeah! I fetch in <a href="https://brapi.dev/" target='_blank' title='brapi api' rel="nofollow noreferrer">Brapi API</a>
              </p>
            </ol>
          </div>

        </Content>
        <SideNav>

        </SideNav>
      </Main>
    </>
  )
}
