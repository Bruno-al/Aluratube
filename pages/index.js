import react from "react"
import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/reset"
import Menu from "../src/components/Menu/index"
import { StyledTimeline } from "../src/components/Timeline";




function HomePage() {
    
    const estiloDaHomePage ={

    }
    const [valorDoFiter,setValorDofilter] = react.useState('');
    // const valorDoFiter = "PR"
    return (
        <> 
        <CSSReset/>
        <div style={estiloDaHomePage}>
        <Menu valorDoFltro={valorDoFiter} setValorDofilter={setValorDofilter} />
        <Header/>
        <TimeLine searchValue={valorDoFiter} playlists={config.playlists}/>
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
`;
const StyledBanner = styled.div`
     width: 100%;
     background-image: url("https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80");
     background-position: top;
     background-size: cover;
     background-repeat: no-repeat;
     height: 50vh;
     max-height: 380px;
`;



function Header(){
    return(
        <StyledHeader>
           <StyledBanner/>
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
function TimeLine({searchValue, ...props}){
    
    const playlistNames = Object.keys(props.playlists);
    return(
        <StyledTimeline>
            {playlistNames.map((PlayListName)=>{
                const videos = props.playlists[PlayListName];
                
                return (
                    <section key={playlistNames}>
                        <h2>{PlayListName}</h2>
                        <div>
                         {videos.filter((video)=>{
                            const titleNormalizerd= video.title.toLowerCase()
                            const searchValuetitleNormalizerd= searchValue.toLowerCase()
                            return titleNormalizerd.includes(searchValuetitleNormalizerd)
                         }).map((video)=>{
                    
                    return (
                        <a key={video.url} href={video.url} target="_blank">
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
