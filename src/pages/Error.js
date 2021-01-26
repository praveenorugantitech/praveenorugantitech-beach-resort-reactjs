import React from 'react'
import {Link} from 'react-router-dom'
import * as Components from '../components/Components'

function Error() {
    return (
        <>
            <Components.Hero>
                <Components.Banner title="404" subtitle="page not found">
                    <Link to="/praveenorugantitech-beach-resort-reactjs" className="btn-primary">return home</Link>
                </Components.Banner>
            </Components.Hero>
        </>
    )
}

export default Error
