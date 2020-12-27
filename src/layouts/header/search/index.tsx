import React, { useEffect, useRef, useState } from 'react';
import './index.less';


interface ISearchProps { };

/**
 * 帧编辑器
 * 
 * @param props props
 */
const FrameEditor: React.FC<ISearchProps> = (props: ISearchProps) => {

    // const [scale, setScale] = useState(1);

    // const pixiFrameEditor = useRef<PixiFrameEditor | null>(null);

    // component did mount
    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className='header-search'>
            <input type="text" />
        </div>
    );
};

export default FrameEditor;
