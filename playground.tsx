// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module react-input-material */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'

import {GenericAnimate} from '.'
// endregion
const Application = () => {
    const [fadeState, setFadeState] = useState<boolean>(false)

    useEffect(():(() => void) => Tools.timeout(
        () => setFadeState((value:boolean) => !value), 2 * 1000
    ).clear)

    return (<div>
        <GenericAnimate in={fadeState} timeout={2000}>Fade it!</GenericAnimate>

        <br/>

        <GenericAnimate children="Fade it!" in={!fadeState} timeout={2000}/>
    </div>)
}

window.onload = ():void =>
    createRoot(document.querySelector('body')!).render(<Application />)
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
