import React, {ReactNode} from 'react'

type Props = {
    children?: ReactNode
}

const PageContent = ({children}: Props) => {
    return (
        <div className="md:container md:mx-auto px-4 pt-28 pb-4">
            {children}
        </div>
    );
};

export default PageContent

