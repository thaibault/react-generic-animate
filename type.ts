// -*- coding: utf-8 -*-
/** @module type */
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
import {ForwardRefExoticComponent, ReactElement, RefAttributes} from 'react'
import {TransitionProps} from 'react-transition-group/Transition'
import {
    StaticWebComponent as StaticBaseWebComponent
} from 'web-component-wrapper/type'
// endregion
export type GenericAnimateProps =
    Partial<TransitionProps<HTMLElement|undefined>>

export interface GenericAnimateComponent<Type> extends
    Omit<ForwardRefExoticComponent<GenericAnimateProps>, 'propTypes'>,
    StaticBaseWebComponent<Type>
{
    (props:(
        GenericAnimateProps & RefAttributes<HTMLDivElement|HTMLSpanElement>
    )): ReactElement
}
