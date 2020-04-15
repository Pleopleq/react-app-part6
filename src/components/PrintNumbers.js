import React from 'react'

const PrintNumbers = ({contact, phone,  index, onClick, id}) =>{
    return <li key={index}> {contact} - {phone} <button onClick={onClick} id={id}>Delete</button></li> 
}

export default PrintNumbers