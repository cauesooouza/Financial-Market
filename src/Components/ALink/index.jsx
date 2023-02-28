import React from 'react'
import { Link } from 'react-router-dom'

export default function ALink({ path, children, color}) {
    return (
        <Link to={path} style={{color:`${color}`}}>{children}</Link>
    )
}
