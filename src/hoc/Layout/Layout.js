import React, {Component} from 'react';
import style from './loyout.module.css'
import HeaderContainer from "../../containers/Header/Header";
class Layout extends Component {
    render() {
        return (
            <div className={style.container}>
                <HeaderContainer/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;