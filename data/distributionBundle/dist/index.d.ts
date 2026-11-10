import type { ForwardRefRenderFunction } from 'react';
import type { GenericAnimateComponent, GenericAnimateProps as Props } from './type';
/**
 * Generic animation wrapper component.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */
export declare const GenericAnimateInner: ForwardRefRenderFunction<unknown, Props>;
/**
 * Generic animation wrapper component.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */
export declare const GenericAnimate: GenericAnimateComponent<typeof GenericAnimateInner>;
export default GenericAnimate;
