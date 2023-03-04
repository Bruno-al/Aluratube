import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/reset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline";



function HomePage() {
    
    const estiloDaHomePage ={
        // backgroundColor: "red"
    }
    return (
        <> 
        <CSSReset/>
        <div style={estiloDaHomePage}>
        <Menu/>
        <Header/>
        <TimeLine playlists={config.playlists}/>
        </div>
        
    </>
    )
  }
  
  export default HomePage

// function Menu(){
//     return(
//         <div>
//            Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
     .user-info img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
     }
    .user-info{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 16px 32px;
        gap: 16px;
    }
    .bunner{
        max-height: 300px;
        width: 100%;
        height: 50%;
    }
`;
function Header(){
    return(
        <StyledHeader>
           <img className="bunner" src={config.bunner}/>
           <section className="user-info">
               <img src={`https://github.com//${config.github}.png`}/>
               <div>
                   <h2>
                   {config.name}
                   </h2>
                   <p>
                    {config.job}
                   </p>
               </div>
               
           </section>
        </StyledHeader>
    )
}
function TimeLine(props){
    
    const playlistNames = Object.keys(props.playlists);
    return(
        <StyledTimeline>
            {playlistNames.map((PlayListName)=>{
                const videos = props.playlists[PlayListName];
                
                return (
                    <section>
                        <h2>{PlayListName}</h2>
                        <div>
                            {videos.map((video)=>{
                    
                    return (
                        <a href={video.url} target="_blank">
                          <img src={video.thumb}/>
                          <span>
                          {video.title}
                          </span>
                        </a>
                )
                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
