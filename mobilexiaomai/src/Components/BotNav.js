import React, { Component } from 'react';
import botnav from './BotNav.module.css';

export default class BotNav extends Component {
    render() {
        return (
            <div className={botnav.botnav}>
                <div className={botnav.buto}>
                    <div className={botnav.butob}>
                        {/* <img src={} className={botnav.butobi} /> */}
                    </div>
                    <div className={botnav.butod}>首页</div>
                </div>

                <div className={botnav.buto}>
                    <div className={botnav.butob}>
                        {/* <img src={} className={botnav.butobi} /> */}
                    </div>
                    <div className={botnav.butod}>发现</div>
                </div>

                <div className={botnav.buto}>
                    <div className={botnav.butob}>
                        {/* <img src={} className={botnav.butobi} /> */}
                    </div>
                    <div className={botnav.butod}>票夹</div>
                </div>

                <div className={botnav.buto}>
                    <div className={botnav.butob}>
                        {/* <img src={} className={botnav.butobi} /> */}
                    </div>
                    <div className={botnav.butod}>我的</div>
                </div>
            </div>
        )
    }
}
