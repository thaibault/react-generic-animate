// -*- coding: utf-8 -*-
/** @module type */
'use strict'
/* !
    region header
    [Project page](https://tsickert.com/react-generic-animate)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import type {
    ForwardRefExoticComponent, ReactElement, RefAttributes
} from 'react'
import type {TransitionProps} from 'react-transition-group/Transition'
import type {
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
