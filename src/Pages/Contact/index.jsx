import Content from 'Components/Content'
import SideNav from 'Components/Sidenav'
import Main from 'Layouts/Main'
import React, { useRef } from 'react'
import { Helmet } from 'react-helmet'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import emailjs from '@emailjs/browser'
import styles from './contact.module.scss'
import Card from 'Components/Card'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s0nxbv4', 'template_j58yhal', form.current, 'ZVVB6wYgz5YNIdM8L')
      .then(result => console.log(result))
      .catch(error => console.error(error))
  }

  return (
    <>
      <Helmet>
        <title>
          Financial Market | Contact me
        </title>
      </Helmet>
      <Main direction='column'>
        <Content>
          <div className={styles.contact_form}>
            <Card>
              <form ref={form} onSubmit={sendEmail} className={styles.contact}>
                <label>Name <span>*</span></label>
                <input type="text" name="user_name" maxLength='128' placeholder='Jane Doe' required />
                <label>Email <span>*</span></label>
                <input type="email" name="user_email" maxLength='128' placeholder='janedoe@yourprovider.com' required />
                <label>Message <span>*</span></label>
                <textarea name="message" required rows='12'
                  placeholder='talk to me, say something about the whole project' />
                <input type="submit" value="Send Message" />
              </form>
            </Card>
          </div>
        </Content>
        <SideNav>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='cauesooouza'
            options={{ height: 400, width: 350 }}
          />
        </SideNav>
      </Main>
    </>
  )
}
