import { Layout,Card, List, Skeleton, Avatar, Button} from "antd"
import React, { useState, useEffect} from 'react';
import './index.scss'
const count = 6;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


const {Header, Content, Footer} = Layout;

const tabList = [
    {
      key: 'Company',
      tab: 'Company',
    },
    {
      key: 'Individual',
      tab: 'Individual',
    },
  ];
 

const LoadData = (tabType) => {

const [initLoading, setInitLoading] = useState(true);  
const [loading, setLoading] = useState(false);  
const [data, setData] = useState([]);   
const [list, setList] = useState([]);   


useEffect(() => {               // Parse http file into json data when initialize the page
    fetch(fakeDataUrl)              // and set it into "data" and "list", and set "initLoading" into true
    .then((res) => res.json())
    .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
    });
}, []);

const onLoadMore = () => {      
    setLoading(true);
    setList(
    data.concat(
        [...new Array(count)].map(() => ({
        loading: true,
        name: {},
        picture: {},
        })),
    ),
    );
    fetch(fakeDataUrl)
    .then((res) => res.json())
    .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event('resize'));
    });
};

const loadMore =
    !initLoading && !loading ? (
    <div
        style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
        }}
    >
        <Button onClick={onLoadMore}>loading more</Button>
    </div>
    ) : null;

if(tabType === 'Individual'){
    return <div>
    <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
            <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>
                <Button>
                    Check
                </Button>
                </div>
            </Skeleton>
            </List.Item>
    )}
    />
    </div>
    }
    return <div>
    <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
            <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>
                <Button>
                    Unfollow
                </Button>
                </div>
            </Skeleton>
            </List.Item>
    )}
    />
    </div>
}
  

const Follow = () => {
    const [activeTabKey, setActiveTabKey1] = useState('tab1');  //解构出当前key 和set func

    const onTab1Change = (key) => {  // 设置点击tab为切换函数
        setActiveTabKey1(key);
    };
    
    return (
        <Layout>
            <Header></Header>

            <Content style={{ 
                padding: '0 50px',
                textAlign: 'left',
                }}>
                <Card
                    style={{
                    width: '100%',
                    }}
                    title="Follow"
                    extra={<a href="../MyPage">Back To MyPage</a>}
                    tabList={tabList}                           
                    activeTabKey={activeTabKey}                 
                    onTabChange={(key) => {                     
                        onTab1Change(key);
                        LoadData(activeTabKey);                 
                    }}
                >
                    {LoadData(activeTabKey)}
                </Card>
                

            </Content>

            <Footer style={{ textAlign: 'center' }}>COMP9323 ©2022 T2 Created by "Github Is Savior"</Footer>
        </Layout>
    )
}


export default Follow


