import React from 'react';
import { ChannelList,useChatContext } from 'stream-chat-react';
import { ChannelSearch,TeamChannelList,TeamChannelPreview} from '.';
import cookies from 'universal-cookie';
import SideBar from './SideBar';

const CompanyHeader =()=>(
 <div className="channel-list__header">
     <p className="channel-list__header__text">V-BOOK/V-CLASSROOM</p>
     
 </div>

);
const ChannelContainerlist = () => {
  return( 
  <div style={{display:'flex',flexDirection:'row'}}>
     <SideBar/> 
     <div className="channel-list__list__wrapper">
         <CompanyHeader/>
         <ChannelList 
         filters={}
         channelRenderFilterFn={}
         List={(listProps)=>(<TeamChannelList
            {...listProps}/>)}
            />
         
            
        
     </div>
     
  </div>
  );
}

export default ChannelContainerlist;
