import type { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import type { StaticWebComponent as StaticBaseWebComponent } from 'web-component-wrapper/type';
export type GenericAnimateProps = Partial<TransitionProps<HTMLElement | undefined>>;
export interface GenericAnimateComponent<Type> extends Omit<ForwardRefExoticComponent<GenericAnimateProps>, 'propTypes'>, StaticBaseWebComponent<Type> {
    (props: (GenericAnimateProps & RefAttributes<HTMLDivElement | HTMLSpanElement>)): ReactElement;
}
