import { Layout, List, Avatar} from "antd"
import { Header, Footer, Content } from "antd/lib/layout/layout";
import React from "react";
import './Test.scss'
//const fakeDataUrl = `https://randomuser.me/api/?results=1&inc=name,gender,email,nat,picture&noinfo`;
const id = 2;
const fakeDataUrl = 'http://127.0.0.1:5000/cont/1/followList';





class Company extends React.Component{

    // state = {
    //     companyLikeList: [],
    // }
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
        fetch(fakeDataUrl)
            .then(res => {return res.json()})
            .then(data => {
                this.setState({
                    companyLikeList: data.message
                })
                console.log(this.state.companyLikeList)
            })
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
                    avatar={item.Icon}
                    title={<a href="@">{item.OrganizationName}</a>}
                    description={item.Description}
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