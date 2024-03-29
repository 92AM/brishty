import React, { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    classNameCustomAttributes?: string;
    addDefaultAttributes?: boolean;
};

const PageContentWrapper = ({ children, classNameCustomAttributes, addDefaultAttributes }: Props) => {
    const shouldAddDefaultAttributes = addDefaultAttributes === undefined ? true : addDefaultAttributes;

    const defaultClassNameAttributes = shouldAddDefaultAttributes ? 'md:container md:mx-auto' : '';
    const defaultClassNameAttributesToAdd = shouldAddDefaultAttributes
        ? defaultClassNameAttributes + ' px-4 pt-20 pb-4'
        : '';

    const classNameToPassToComponent = classNameCustomAttributes
        ? defaultClassNameAttributes + ' ' + classNameCustomAttributes
        : defaultClassNameAttributesToAdd;

    return <div className={classNameToPassToComponent}>{children}</div>;
};

export default PageContentWrapper;
