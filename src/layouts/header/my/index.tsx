import React, { useEffect, useRef, useState } from 'react';
import './index.less';


interface IMyProps { };

/**
 * 帧编辑器
 * 
 * @param props props
 */
const FrameEditor: React.FC<IMyProps> = (props: IMyProps) => {

    // const [scale, setScale] = useState(1);

    // const pixiFrameEditor = useRef<PixiFrameEditor | null>(null);

    // component did mount
    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className='header-my'>
            <ul className="menu-wrap">
                <li className="menu-item">大会员</li>
                <li className="menu-item">消息</li>
                <li className="menu-item">动态</li>
                <li className="menu-item">收藏</li>
                <li className="menu-item">历史</li>
                <li className="menu-item">创作中心</li>
            </ul>

        </div>
    );
};

export default FrameEditor;
