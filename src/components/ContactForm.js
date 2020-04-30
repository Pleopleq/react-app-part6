import React from 'react'

const ContactForm = ({ onSubmit, valueName, onChangeName, valueNumber, onChangeNum }) =>{
  return (
    <form onSubmit={onSubmit}> 
      <div>
            name: <input value={valueName}
          onChange={onChangeName}
        />
            phone: <input value={valueNumber}
          onChange={onChangeNum}
        />
        <div>
          <button type='submit'>Add</button>
        </div>
      </div>
    </form>
  )
}


export default ContactForm