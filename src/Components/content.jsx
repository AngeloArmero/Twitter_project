import '../App.css';
import Myside from './sidebar.jsx';
import Myfeed from './feed.jsx';
import Mywidgets from './widgets.jsx';
function content(){
        return(
            <>  
            <div className='app'>
            <Myside/>
            <Myfeed/>
            <Mywidgets/>
            </div>
            </>
        );

}
export default content;