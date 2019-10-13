import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {  Grid,Responsive} from 'semantic-ui-react';
import HeaderPanel from './Header/header'
import SidePanelLeft from './SidePanel/SidePanelLeft'
import SidePanelRight from './SidePanel/SidePanelRight'
import NewsFeeds from './NewsFeeds/NewsFeeds'
import MainBlog from './NewsFeeds/MainBlog'
import Post1 from './Post/Post1'

const App = ({currentUser}) =>(
  <Grid style={{background : '#EDEDED'}}>
       
    <HeaderPanel />
    <Responsive minWidth={480}>
    </Responsive>
    {/* <SidePanelRight /> */}
    
      <Grid.Column  style={{width: '60%' ,marginTop: '90px', left: '50%',transform: 'translateX(-50%)'}}>
            <Post1 />
      </Grid.Column>
  
    
   
      </Grid>
)

const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
