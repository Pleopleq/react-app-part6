import React from 'react'

const PrintNumbers = ({contact, phone,  index}) =>{
    return <li key={index}> {contact} - {phone}</li>
}

export default PrintNumbers