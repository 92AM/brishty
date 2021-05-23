import React, {ReactNode} from 'react'

type Props = {
    children?: ReactNode
    classNameCustomAttributes?: string
}

const PageContentWrapper = ({children, classNameCustomAttributes}: Props) => {

    const defaultClassNameAttributes = "md:container md:mx-auto";

    const classNameToPassToComponent = classNameCustomAttributes
        ? defaultClassNameAttributes + " " + classNameCustomAttributes
        : defaultClassNameAttributes + " px-4 pt-20 pb-4";

    return (
        <div className={classNameToPassToComponent}>
            {children}
        </div>
    );
};

export default PageContentWrapper

