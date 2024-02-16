import '../App.css';

function side(){
        return(
            <> <div  className="sidebar">
            <i  className="fa-brands fa-x-twitter"></i>
              <div  className="sidebarOption active">
               <span  className="material-symbols-outlined"> home </span>
               <h2  className="home">Home</h2>
              </div>
               <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined"> search </span> 
                  <h2>Explore</h2>
              </div>
              <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined"> Notifications</span>
                  <h2>Notifications</h2>
              </div>
              <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined">  Mail </span>
                  <h2>Messages</h2>
              </div>
              <div  className="sidebarOption ">
              <span  className="material-symbols-outlined">List_alt </span>
              <h2>List</h2>      
              </div>
              <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined"> group </span>
              <h2> Communities </h2>
              </div>
              <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined"> perm_identity</span>
              <h2>Profile</h2>
              </div>
              <div  className="sidebarOption ">
                  <span  className="material-symbols-outlined"> more_horiz</span>
              <h2>More</h2>
              </div>
              <button  className="sidebar_post">Post</button>
              <div className="sidebarOption" style={{marginTop:'20px', position: 'absolute'}}>
                  <img src="../images/bogs.jpg" alt="user"/>
                  <h2>Bogs
                      <br/>
                     <p style={{fontSize: '15px',color:'gray'}}>@Bogs</p>
                  </h2>
                  <span className="material-symbols-outlined"> more_horiz</span>
              </div>
            </div>
       
            </>
        );

}
export default side;