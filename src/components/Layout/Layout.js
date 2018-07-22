import React from 'react';

import Moods from '../../container/Moods/Moods'
import SavedMoods from '../../container/SavedMoods/SavedMoods'
import './Layout.css'

const Layout = (props) => (
    <div>
        <SavedMoods />
        <h1>Moods</h1>
        <Moods />
    </div>
)

export default Layout;