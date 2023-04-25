 
import React from 'react'
import '../styles/contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact us</h1>
 
        <form>
          <div>
            <label for='name'>Name  </label>
            <input type="text" placeholder='xyz' name='name' ></input>
          </div>
          <div>
            <label for='email'>Email  </label>
            <input type="email" placeholder='xyz@gmail.com' name='email' ></input>
          </div>
          <div>
            <label for='query'>Message  </label>
            <input type="text" placeholder='Tell us about your Query' name='query' ></input>
          </div>
         

        <button type="submit">Send</button>
        </form>
      </main>
        
    </div>
  )
}

export default Contact
