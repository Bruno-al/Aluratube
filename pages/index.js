import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu/index"
import { StyledTimeline } from "../src/components/Timeline";
import { videoService } from "../src/services/videoService";



function HomePage() {
    const service = videoService()
    const [valorDoFiter,setValorDofilter] = React.useState('');
    // const playlists = {};
    const [playlists , setPlayLists] = React.useState({})

    React.useEffect(()=>{
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlayLists(novasPlaylists);
            });
    }, []);

    
   
    const estiloDaHomePage ={}
    return (
        <> 
        
        <div style={estiloDaHomePage}> 
        <Menu valorDoFltro={valorDoFiter} setValorDofilter={setValorDofilter} />
        <Header/>
        <TimeLine searchValue={valorDoFiter} playlists={playlists}/>
        </div>
        
    </>
    )
  }
  
  export default HomePage


const StyledHeader = styled.div`
    background-color: ${({theme})=> theme.backgroundLevel1};
    
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
     background-image: url("https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80");
     background-position: top;
     background-size: cover;
     background-repeat: no-repeat;
     height: 280px;
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
