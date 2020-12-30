import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { Menu, Dropdown, Button } from 'antd';
import bigPiture from 'assets/header/menu/game/big.jpg';
import smallPiture from 'assets/header/menu/game/small.jpg';
import previewItem1 from 'assets/header/menu/game/previewItem1.png';
import previewItem2 from 'assets/header/menu/game/previewItem2.png';
import { testapi } from 'src/services/api';

interface IMenuProps { };

const menu: any = (
    <Menu>
        <div className='header-menu-drop'>
            <div className="piture-content">
                <div className="big" >
                    <img src={bigPiture} alt="" />
                </div>
                <div className="small">
                    <ul>
                        <li>
                            <img src={smallPiture} alt="" />
                            <span>公主连结Re:Dive</span>
                        </li>
                        <li>
                            <img src={smallPiture} alt="" />
                            <span>公主连结Re:Dive</span>
                        </li>
                        <li>
                            <img src={smallPiture} alt="" />
                            <span>公主连结Re:Dive</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='preview'>
                <ul>
                    <li>
                        <span>影之刃3</span>
                        <img src={previewItem1} alt="" />
                    </li>
                    <li>
                        <span>天谕</span>
                        <img src={previewItem2} alt="" />
                    </li>
                    <li>
                        <span>代号：Project Doll</span>
                        <img src={previewItem1} alt="" />
                    </li>
                    <li>
                        <span>诺弗兰物语</span>
                        <img src={previewItem2} alt="" />
                    </li>
                    <li>
                        <span>银河境界线</span>
                        <img src={previewItem1} alt="" />
                    </li>
                    <li>
                        <span>狩猎时刻</span>
                        <img src={previewItem2} alt="" />
                    </li>
                    <li>
                        <span>摩尔庄园</span>
                        <img src={previewItem1} alt="" />
                    </li>
                </ul>
                {/* <div className="preview-item">
                    <img src={previewItem1} alt="" />
                </div> */}
            </div>
        </div>
    </Menu>
);
/**
 * 帧编辑器
 * 
 * @param props props
 */
const FrameEditor: React.FC<IMenuProps> = (props: IMenuProps) => {

    // const [scale, setScale] = useState(1);

    // const pixiFrameEditor = useRef<PixiFrameEditor | null>(null);

    useEffect(() => {
        testapi().then(res => {
            console.log("res:", res)
        })
        return () => {
        };
    }, []);


    return (
        <div className='menu'>
            <ul className="menu-wrap">
                <li className="menu-item">主站</li>
                <li className="menu-item">番剧</li>
                <Dropdown overlay={menu} placement="bottomLeft" arrow={true} className="menu-item">
                    {/* <Button>bottomCenter</Button> */}
                    <span>游戏中心</span>
                </Dropdown>
                <li className="menu-item">游戏中心</li>
                <li className="menu-item">直播</li>
                <li className="menu-item">会员购</li>
                <li className="menu-item">漫画</li>
                <li className="menu-item">赛事</li>
                <li className="menu-item">跨晚</li>
                <li className="menu-item">下载APP</li>
            </ul>
        </div>
    );
};

export default FrameEditor;
