import  { useEffect } from 'react'; 
import '../App.css';

function Feed() {
  useEffect(() => {
    const updateTime = () => {
      const timestamp = Date.now();
      const hours = new Date(timestamp).getHours();
      document.querySelectorAll('time').forEach(element => {
        element.textContent = `${hours} hr`;
      });
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          if (!video.playing) {
            video.play();
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, { threshold: 0.5 });

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      observer.observe(video);

      video.addEventListener('play', () => {
        video.playing = true;
      });

      video.addEventListener('pause', () => {
        video.playing = false;
      });

      video.addEventListener('click', function () {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    setInterval(updateTime, 1000);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
        // Update custom scrollbar position
        document.documentElement.style.setProperty('--scroll-percentage', `${scrollPercentage}%`);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Cleanup event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
        return(
            <>   <div  className="feed">
            <div  className="feed_header">
                <div  className="foryou">
            <ul  className="p1">
                <li><a href="">For you</a></li>
            </ul>
        </div>
        <div  className="following">
            <ul className="p2">
            <li><a href="">Following</a></li>
            </ul>
        </div>
        <div  className="settings"> <a href="#"><span className="material-symbols-outlined settings" >settings</span>
        </a></div>
        </div>
            <div  className="tweetBox">
                <form>
                    <div  className="tweetBox_input">
                     <img src="../images/bogs.jpg" alt="user"/>
                     <input type="text" placeholder="What is happening?!"/>
                    </div>
                    <ul>
                        <li> <span  className="material-symbols-outlined">image</span></li>
                        <li><span  className="material-symbols-outlined"> gif_box </span></li>
                        <li><span  className="material-symbols-outlined"> gif_box </span></li>
                        <li><span  className="material-symbols-outlined"> poll </span></li>
                        <li><span  className="material-symbols-outlined"> sentiment_satisfied</span></li>
                        <li><span  className="material-symbols-outlined"> pending_actions</span></li>
                        <li><span className="material-symbols-outlined"> location_on</span></li>
                        <button  className="tweetBox_tweetbutton">Post</button>
                    </ul>
                    <div  className="showPost">
                        <h2>Show 45 post </h2>
                    </div>
                </form>
            </div>
        <div  className="post">
            <div  className="post_avatar">
                <img src="../images/luffy.jpg" alt="user"/>
            </div>
            <div  className="post_body">
                <div  className="post_header">
                    <div className="post_headerText">
                        <h3>One Piece
                        <span className="post_headerSpecial">
                            <span  className="material-symbols-outlined post_badge" > verified </span>@OnePieceAnime <time dateTime="2024-02-08T00:00:51.000Z"></time>
                        </span>
                    </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Whats this?! &#128562;<span style={{fontSize: '130%', color: 'red'}}>&hearts;</span></p>
                    </div>
                </div>
                <video  id="postVideo1" data-autoplay="false" autoPlay muted controls loop src="../videos/onepiece.mp4"></video>
                <div  className="post_footer">
                    <span  className="material-symbols-outlined">comment</span>
                    <span  className="material-symbols-outlined"> repeat </span>
                    <span  className="material-symbols-outlined"> favorite</span>
                    <span  className="material-symbols-outlined"> leaderboard</span>
                    <div>
                    <span  className="material-symbols-outlined">bookmark </span>
                    <span  className="material-symbols-outlined">ios_share</span>
                    </div>
                </div>
            </div>
        </div>
        <div  className="post">
            <div  className="post_avatar">
                <img src="../images/ml.jpg" alt="user"/>
            </div>
            <div  className="post_body">
                <div  className="post_header">
                    <div  className="post_headerText">
                        <h3>Mobile Legends:Bang Bang
                        <span  className="post_headerSpecial">
                            <span  className="material-symbols-outlined post_badge2" > verified </span>@MobileLegendsOL  <time dateTime="2024-02-08T00:00:51.000Z"></time>
                        </span>
                    </h3>
                    </div>
                    <div  className="post_headerDescription">
                        <p>MLBB  Attack on Titan @AttackOnTitanEN collaboration is arriving!</p>
                           <p>Yin Eren, Fanny Mikasa, and Martis Levi, the Scout Regiment squad assemble!</p>
                           <br/>
                           <div style={{color:'#50b7f5'}}>
                           <p>#MobileLegendsBangBang</p>
                           <p>#MobileLegendsBangBangxATTACKONTITAN</p>
                           <p>#MLBBxAOT</p>
                           <p>#MLBBNEWSKIN!</p>
                        </div>
                    </div>
                </div>
                <video  id="postVideo2" data-autoplay="false" autoPlay muted controls loop src="../videos/mlb.mp4"></video>
                <div className="post_footer">
                    <span className="material-symbols-outlined">comment</span>
                    <span className="material-symbols-outlined"> repeat </span>
                    <span className="material-symbols-outlined"> favorite</span>
                    <span className="material-symbols-outlined"> leaderboard</span>
                    <div>
                    <span className="material-symbols-outlined">bookmark </span>
                    <span className="material-symbols-outlined">ios_share</span>
                    </div>
                </div>
            </div>
        </div>
            <div  className="post">
                <div  className="post_avatar">
                    <img src="../images/nba.png" alt="user"/>
                </div>
                <div  className="post_body">
                    <div  className="post_header">
                        <div  className="post_headerText">
                            <h3>NBA
                            <span  className="post_headerSpecial">
                                <span  className="material-symbols-outlined post_badge2" > verified </span>@NBA <time dateTime="2024-02-08T00:00:51.000Z"></time>
                            </span>
                        </h3>
                        </div>
                        <div  className="post_headerDescription">
                            <p>TONIGHTS SLATE ‼️  
                                <div>
                                <br/>
                                <li> CLE seeks 8 wins in a row</li>
                                <li>  LAL vs. DEN 2023 Playoff rematch</li>
                                <li> #2 in West MIN visits #3 in East MIL</li>
                                <br/>
                                <span style={{fontSize:'15px'}} className="material-symbols-outlined"> tv</span> TNT, NBA App
                                <p><a style={{color: '#50b7f5'}} href="http://link.nba.com/dailysg">http://link.nba.com/dailysg</a></p>
                            </div> 
                        </p>
                        </div>
                    </div>
                    <img src="../images/nba1.jfif" alt="pic"/>
                    <div  className="post_footer">
                        <span  className="material-symbols-outlined">comment</span>
                        <span  className="material-symbols-outlined"> repeat </span>
                        <span  className="material-symbols-outlined"> favorite</span>
                        <span  className="material-symbols-outlined"> leaderboard</span>
                        <div>
                        <span  className="material-symbols-outlined">bookmark </span>
                        <span className="material-symbols-outlined">ios_share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            </>
        );

}
export default Feed;