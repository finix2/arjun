
import Progressbar from "./Progress_bar";
import './TwoColumnLayout.css';
const Skill = () => {
    return (<> <div className="Container"><br></br><div className="SectionTitle">Skill</div>
        <div className="two-column-container">
      <div className="column">
        {/* Content for the first column */}
       <ul>
        <li><h2>Python</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="70"
        height={10} /></p></li>
         <li><h2>HTML</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="90"
        height={10} /></p></li>
         <li><h2>CSS</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="60"
        height={10} /></p></li>
        </ul>
      </div>
      <div className="column">
        {/* Content for the second column */}
        <ul>
        <li><h2>React</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="70"
        height={10} /></p></li>
         <li><h2>javaScript</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="80"
        height={10} /></p></li>
         <li><h2>PHp</h2>
        <p><Progressbar
        bgcolor="dodgerblue"
        progress="80"
        height={10} /></p></li>
        
        </ul>
      </div>
    </div>
    
      
   
        </div>
        </>);
}


export default Skill;