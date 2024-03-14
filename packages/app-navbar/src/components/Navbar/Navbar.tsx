import { Layout, Menu, theme } from 'antd';

import classes from './Navbar.module.css';

const { Header } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `Item ${index + 1}`,
}))

export function Navbar() {
    return (
        <Layout className={classes.layout}>
            <Header className={classes.header} >
                <div className={classes.logoNav}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className={classes.menu}
                        items={items}
                    />
                </div>
            </Header>
        </Layout>
    )
}