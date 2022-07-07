import { Layout, Avatar, Button} from "antd"
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
                 <div className="follow">follow</div>
                 <div className="job-preference">job-preference</div>
                 <div className="released">released</div>
                 <div className="contains-preference">released</div>
                 <div className="mood-diary">released</div>
            </Content>


        </Layout>
    )
}

export default MyPage