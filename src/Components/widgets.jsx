import '../App.css';

function widgets(){
        return(
            <>  
              <div className="widgets">
        <div className="widgets_inputs">
            <span className="material-symbols-outlined widgets_searchIcon">search</span>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="widgets_widgetContainer">
            <h2>Subscribe to Premium</h2>
            <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className="Subscribe">Subscribe</button>
        </div>
        <div className="trends" >
            <div className="trends_foryou_block" style={{backgroundColor: 'transparent'}}>
                <div className="trends_foryou_heading"style={{backgroundColor: 'transparent'}}>
                    <p style={{backgroundColor: 'transparent'}}>Trends For You</p>
                </div>
            </div>
            <div className="trends_foryou_block" style={{backgroundColor: 'transparent'}}>
                <div className="trends_fy_information" style={{backgroundColor: 'transparent'}}>
                    Music ·Trending
                </div>
                <div className="trends_fy_trend-name" style={{backgroundColor: 'transparent'}}>
                    #ALJAMES
                </div>
                <div className="trends_fy_information" style={{backgroundColor: 'transparent'}}>
                    25k posts
                </div>
            </div>
            
            <div className="trends_foryou_block" style={{backgroundColor: 'transparent'}}>
                <div className="trends_fy_information" style={{backgroundColor: 'transparent'}}>
                    Trending in Philippines
                </div>
                <div className="trends_fy_trend-name" style={{backgroundColor: 'transparent'}}>
                    #BillyCrawford
                </div>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                   8,479 posts
                </div>
            </div>
            <div className="trends_foryou_block"style={{backgroundColor: 'transparent'}}>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    Trending in Pop
                </div>
                <div className="trends_fy_trend-name"style={{backgroundColor: 'transparent'}}>
                    The Way I Loved you
                </div>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    200k posts
                </div>
            </div>
            <div className="trends_foryou_block"style={{backgroundColor: 'transparent'}}>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    Music ·Trending
                </div>
                <div className="trends_fy_trend-name"style={{backgroundColor: 'transparent'}}>
                    #STELLAJERO
                </div>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    19.4k posts
                </div>
            </div>
    
            <div className="trends_foryou_block"style={{backgroundColor: 'transparent'}}>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    Music ·Trending
                </div>
                <div className="trends_fy_trend-name"style={{backgroundColor: 'transparent'}}>
                    #WELCOME TO CIRCUS 100M ZONE
                </div>
                <div className="trends_fy_information"style={{backgroundColor: 'transparent'}}>
                    9,128 posts
                </div>
            </div>
            <div className="showmore" style={{backgroundColor: 'transparent'}}>
                <p>Show More</p>
            </div>
            </div>
            <div className='following'>
            <div className='header'>
            </div>
            </div>
        <div className="who_to_follow">
                <div className="header">
                <h2>Who to follow</h2>
            </div>
                <div className="follow">
                        <img src="./images/rhy.jpg" alt="user"/>
                        <h2>Hev_rhy
                            <br/>
                           <p style={{fontSize: '15px', color:'gray'}}>@Hev_rhy</p>
                        </h2>
                        <button className="post_button1">follow</button>
                    </div>
                    <div className="follow">
                        <img src="./images/mv.jpg" alt="user"/>
                        <h2>Mvincent
                            <br/>
                           <p style={{fontSize: '15px', color:'gray'}}>@Mvincent</p>
                        </h2>
                        <button className="post_button2">follow</button>
                    </div>
                    <div className="follow">
                        <img src="./images/kv.png" alt="user"/>
                        <h2>KVerdie
                            <br/>
                           <p style={{fontSize: '15px', color:'gray'}}>@KVerdie</p>
                        </h2>
                    
                        <button className="post_button3">follow</button>
                    </div>  
            </div>
            <div className='anchor'>
             <a href='#'>Terms of Service</a>
             <a href='#'>Privacy Policy</a>
             <a href='#'>Cookie Policy</a>
                   </div>
            <div className='anchor2'>
             <a href='#'>Accessibility</a>
             <a href='#'>Ads info</a>
            <p>More</p> <a href='#'className="material-symbols-outlined">more_horiz</a>
             <p>© 2024 X Corp.</p>
             </div>
            </div>
            </>
        );

}
export default widgets;