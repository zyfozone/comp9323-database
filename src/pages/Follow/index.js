import { Layout, Card, List, Avatar, Button} from "antd"
import { Header, Footer, Content } from "antd/lib/layout/layout";
import React, { useState} from 'react';
import './index.scss'
import { UserOutlined} from '@ant-design/icons';
import { useStore } from "@/store"; 
import { http } from "@/utils"

// const id = 2;
const fakeDataUrl = 'http://127.0.0.1:5000/cont/1/followList';

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

function GetLikeList(id){
    const {user} = useStore();
    return user.GetLikeList(id);
}


class Company extends React.Component{          // company follow tab 


    constructor(){
        super()
        
        this.state = {
            companyLikeList: [
                {
                    OrganizationId: "",
                    OrganizationName: "",
                    Description:"",
                    Icon:"",
                    follow: ""
                }
            ]
        }
    }



    componentDidMount(){
        //console.log(this.state)
        fetch(fakeDataUrl,
            {method: 'GET',})
            .then(res => {return res.json()})
            .then(data => {
                //console.log(data)
                this.setState({
                    companyLikeList: data.message
                    //companyLikeList: useStore().GetLikeList(1)
                })
                //console.log(this.state.companyLikeList)
            })
    }
    



    // {() => this.GetLikeList(2)}

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
                    title={<a href="@">{item.OrganizationName}</a>}
                    description={item.Description}
                    />
                    <Button onClick={() => this.clickFollowHandler(item)}>{item.follow}</Button>
                </List.Item>
                )}
            />
        </div>
    }
}

class Individual extends React.Component{    // individual follow tab
    render(){
        return <div>
            Individual
        </div>
    }
}

const loadContents = (currTab) => {            // determine which tab to show
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
                    extra={<a href="../MyPage">Back</a>}
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