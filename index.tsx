// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericAnimate */
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
import {isFunction} from 'clientnode'
import {boolean, number, string} from 'clientnode/dist/property-types'
import {
    ForwardedRef,
    ForwardRefRenderFunction,
    forwardRef,
    memo as memorize,
    ReactElement,
    useRef
} from 'react'
import {CSSTransition} from 'react-transition-group'

/*
"namedExport" version of css-loader:

import {
    genericAnimate: genericAnimateClassName,
    genericAnimateListWrapper: genericAnimateListWrapperClassName,
    genericAnimateWrapper: genericAnimateWrapperClassName
} from './style.module'
*/
import cssClassNames from './style.module'
import {GenericAnimateComponent, GenericAnimateProps as Props} from './type'
import {ENTERING} from 'react-transition-group/Transition'
// endregion
const CSS_CLASS_NAMES = cssClassNames
/**
 * Generic animation wrapper component.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */
export const GenericAnimateInner = function(
    properties:Props, reference?:ForwardedRef<HTMLDivElement|HTMLSpanElement>
):ReactElement {
    if (!reference)
        reference = useRef(null)

    const content =
        isFunction(properties.children) ?
            properties.children(ENTERING) :
            properties.children

    return <CSSTransition
        appear
        classNames={CSS_CLASS_NAMES.genericAnimate}
        in

        nodeRef={reference}

        timeout={200}
        unmountOnExit
        {...properties}
    >
        {
            typeof content === 'string' ?
                <span
                    className={CSS_CLASS_NAMES.genericAnimateWrapper}
                    ref={reference as ForwardedRef<HTMLSpanElement>}
                >
                    {content}
                </span> :
                Array.isArray(content) ?
                    <div
                        className={CSS_CLASS_NAMES.genericAnimateListWrapper}
                        ref={reference as ForwardedRef<HTMLDivElement>}
                    >
                        {content}
                    </div> :
                    typeof content === 'string' ?
                        <span ref={reference as ForwardedRef<HTMLSpanElement>}>
                            {content}
                        </span> :
                        content
        }
    </CSSTransition>
} as ForwardRefRenderFunction<unknown, Props>
/**
 * Generic animation wrapper component.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */
export const GenericAnimate:GenericAnimateComponent<
    typeof GenericAnimateInner
> = memorize(forwardRef(GenericAnimateInner)) as
    unknown as
    GenericAnimateComponent<typeof GenericAnimateInner>
// region static properties
/// region web-component hints
GenericAnimate.wrapped = GenericAnimateInner
GenericAnimate.webComponentAdapterWrapped = 'react'
/// endregion
GenericAnimate.propTypes = {
    appear: boolean,
    classNames: string,
    in: boolean,
    timeout: number
}
// endregion
export default GenericAnimate
