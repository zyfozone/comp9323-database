import { Layout, List, Avatar} from "antd"
import { Header, Footer, Content } from "antd/lib/layout/layout";
import React from "react";
import './Test.scss'
import { UserOutlined} from '@ant-design/icons';
import axios from "axios";
const fakeDataUrl = `https://randomuser.me/api/?results=1&inc=name,gender,email,nat,picture&noinfo`;





class Company extends React.Component{

    state = {
        companyLikeList: [],

    }
    loadList = async () => {
        const res = await axios.get(fakeDataUrl)
        console.log(res)
        this.setState({
            companyLikeList: res.data
        })
    }

    componentDidMount(){
        this.loadList()
    }

    // componentDidMount(){
    //     fetch(fakeDataUrl)
    //         .then(res => {return res.json()})
    //         .then(data => {
    //             // console.log(data)
    //             this.setState({
    //                 // data.concat(
    //                 //     [...new Array(count)].map(() => ({
    //                 //     loading: true,
    //                 //     name: {},
    //                 //     picture: {},
    //                 //     })),
    //                 companyLikeList: [
                        
    //                 ]
    //             })
    //         })

    // }



    render(){
        return <div>
            <List
                itemLayout="horizontal"
                dataSource={this.state.companyLikeList}
                renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                    //avatar={<Avatar size={45} icon={<UserOutlined />} />}
                    title={<a href="@">{item.name}</a>}
                    description={item.email}
                    />
                    
                </List.Item>
                )}
            />
        </div>
    }
}



const Test = () => {
  

    return(
        <Layout>
            <Header></Header>

            <Content style={{ 
                padding: '0 50px',
                textAlign: 'left',
            }}>
            <Company></Company>

            </Content>

            <Footer>Footer</Footer>
        </Layout>
    )
    

}




export default Test