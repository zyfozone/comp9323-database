import { Layout, Avatar, Button, Card, Row, Col, Space} from "antd"
import { UserOutlined } from '@ant-design/icons';
import './MyPage.scss'


const {  Header, Content } = Layout;

const MyPage = () => {
    return (
        <Layout>
            <Header style={{ height:'150px' }}>
                <div className="header-content">
                    <div className="user-icon">
                        <Avatar size={100} icon={<UserOutlined />} />
                    </div>

                    <span className="user-name">user.name</span>
                    <br/>
                    <span className="user-identity">user.identity</span>
                    

                    <div className="edit">
                        <Button type="dashed"> edit</Button>
                    </div>
                    <div className="logout">
                        <Button type="dashed"> logout</Button>
                    </div> 
                </div>
            </Header>
            
            <Content style={{ padding: '0 50px' }}>
                <Card
                    title="Follow"
                    extra={<a href="@">More</a>}
                    style={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                    type="inner"
                >
                    <p>Company Users</p>
                    <Space
                        direction="horizontal"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}
                    >
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                    </Space>



                    <p>Individual Users</p>
                    <Space
                        direction="horizontal"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}
                    >
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                        <div class="text-under-avatar">
                            <Avatar size={60} icon={<UserOutlined />} />
                            <span style={{display:"block"}}>user</span>
                        </div>
                    </Space>
                </Card>
                <Card
                    title="Job Preference"
                    extra={<a href="@">More</a>}
                    style={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                    type="inner"
                    
                >
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}
                    >
                    <Row>
                        <Col span={4} align='center'>
                            <div class="text-under-avatar">
                                <Avatar size={70} icon={<UserOutlined />} />
                                <span style={{display:"block"}}>user</span>
                            </div>
                        </Col>
                        <Col span={6} align='left'>
                            <p id="job-company">Job.company</p>
                            <p id="job-position">Job.position</p>
                        </Col>
                        <Col span={12}></Col>
                        <Col span={2} className="button-in-cols">
                            <Button type="primary" size={'18px'} href='@' >check</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} align='center'>
                            <div class="text-under-avatar">
                                <Avatar size={70} icon={<UserOutlined />} />
                                <span style={{display:"block"}}>user</span>
                            </div>
                        </Col>
                        <Col span={6} align='left'>
                            <p id="job-company">Job.company</p>
                            <p id="job-position">Job.position</p>
                        </Col>
                        <Col span={12}></Col>
                        <Col span={2} className="button-in-cols">
                            <Button type="primary" size={'18px'} href='@' >check</Button>
                        </Col>
                    </Row>
                    </Space>
                    
                    
                </Card>
               
            </Content>


        </Layout>
    )
}

export default MyPage