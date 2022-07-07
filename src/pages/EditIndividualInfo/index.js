import { Layout, Popconfirm, Menu} from "antd"

import './index.scss'

const {Header, Sider} = Layout

const EditIndividualInfo = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">user.name</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
                            {/* <icon0/> 退出     */}                                       {/*(这是一张没有导入的图)*/}
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="style-layout-background">
                    <Menu
                        mode = "inline"
                        theme = "dark"
                        defaultSelectedKeys = {['1']}
                        style = {{height:'100%', borderRight: 0}}
                    
                        items={[
                            {
                                key:'1',
                                // icon: <icon1 />,
                                label: '数据概览',
                                // 点击后，去home
                                // onClick: () => {Navigate('/')}
                            },
                            {
                                key:'2',
                                // icon: <icon2 />,
                                label: '内容管理',
                                // 点击后，去/article
                                // onClick: () => {Navigate('/article')}

                            },
                            {
                                key:'3',
                                // icon: <icon3 />,
                                label: '发布文章',
                                // 点击后，去/publish
                                // onClick: () => {Navigate('/publish')}
                            },
                        ]}
                    />
                </Sider>
                <Layout className="layout-content" style={{padding:20}}>内容</Layout>
            </Layout>
        </Layout>
    )
}


export default EditIndividualInfo