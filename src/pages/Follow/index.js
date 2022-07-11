import { Layout, Card, List, Avatar, Button} from "antd"
import { Header, Footer, Content } from "antd/lib/layout/layout";
import React, { useState} from 'react';
import './index.scss'
import { UserOutlined} from '@ant-design/icons';
const fakeDataUrl = `https://randomuser.me/api/?results=1&inc=name,gender,email,nat,picture&noinfo`;



const tabList = [
    {
        key: 'Company',
        tab: 'Company'
    },
    {
        key: 'Individual',
        tab: 'Individual'
    }
];



class Company extends React.Component{

    state = {
        companyLikeList:[ 
            {
                id: 1,
                avatar: 'avatar link',
                name: 'company A',
                description: 'description of company a',
                follow: 'Follow'
            },
            {
                id: 2,
                avatar: 'avatar link',
                name: 'company B',
                description: 'description of company b',
                follow: 'Follow'
            },
        ],
        loading: false,
        initialLoading: true 
    }

    clickFollowHandler = (curItem) =>{
        console.log(curItem)    

        const {id, follow} = curItem

        this.setState({
            companyLikeList: this.state.companyLikeList.map(item =>{ 
                if(item.id === id){
                    return{
                        ...item,
                        follow: follow === 'Follow' ? 'Unfollow' : 'Follow'     // switch follow status
                    }
                }
                else{
                    return item
                }
                
            })
        })
    }

    // onLoadMoreHandler = (curItem) => {    
        
    //     const {laoding, initLoading} = curItem

    //     this.setState({
    //         loading: this.state.loading = false
    //         // setLoading(true);


    //     })
     
    //     setList(
    //     data.concat(
    //         [...new Array(count)].map(() => ({
    //         loading: true,
    //         name: {},
    //         picture: {},
    //         })),
    //     ),
    //     );
    //     fetch(fakeDataUrl)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         const newData = data.concat(res.results);
    //         setData(newData);
    //         setList(newData);
    //         setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //         // In real scene, you can using public method of react-virtualized:
    //         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

    //         window.dispatchEvent(new Event('resize'));
    //     });
    // };

    loadMore =
        !this.state.initLoading && !this.state.loading ? (
        <div
            style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
            }}
        >
            <Button onClick={this.onLoadMoreHandler}>loading more</Button>
        </div>
        ) : null;

    render(){
        return <div>
            <List
                itemLayout="horizontal"
                //loadMore={this.loadMore}
                dataSource={this.state.companyLikeList}
                renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar size={45} icon={<UserOutlined />} />}
                    title={<a href="@">{item.name}</a>}
                    description={item.description}
                    />
                    <Button onClick={() => this.clickFollowHandler(item)}>{item.follow}</Button>
                </List.Item>
                )}
            />
        </div>
    }
}

class Individual extends React.Component{
    render(){
        return <div>
            Individual
        </div>
    }
}

const loadContents = (currTab) => {
    if(currTab === 'Company'){
      return <div><Company/></div>
    }
    return <div><Individual/></div>
  }

   

const Follow = () => {
    const [activeTabKey, setActiveTabKey] = useState('tab1');
  
    const onTab1Change = (key) => {
      setActiveTabKey(key);
    };
  


    return(
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
                    extra={<a href="./MyPage">Back</a>}
                    tabList={tabList}
                    activeTabKey={activeTabKey}
                    onTabChange={(key) => {
                        onTab1Change(key);  
                    }}
                >
                    {loadContents(activeTabKey)}
        </Card>

            </Content>

            <Footer>Footer</Footer>
        </Layout>
    )
    

}




export default Follow