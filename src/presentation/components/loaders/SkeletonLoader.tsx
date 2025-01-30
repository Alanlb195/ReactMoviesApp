import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

interface Props {
    visible: boolean;
    width: string | number;
    height: string | number;
    children: React.ReactNode;
    styles?: any;
}


// component not used at the moment but functional

export const SkeletonLoader = ({ visible, width, height, children, styles }: Props) => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(visible);
    }, [visible])


    return (
        <ShimmerPlaceHolder
            visible={isLoaded}
            duration={1500}
            width={width}
            height={height}
            style={styles}
            stopAutoRun={false}
        >
            {children}
        </ShimmerPlaceHolder>
    );
};
