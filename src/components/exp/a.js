import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.css"


    const A = () => {
        return (
            <div className="Container">
            <br></br>
        <div className="SectionTitle">Education</div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023-present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<i class="fa fa-circle" aria-hidden="true"></i>}
            >
             <p> Master of Computer Application(MCA)
              </p><br></br>
              {/* <h2 className="vertical-timeline-element-title-bold" >Master of Computer Application</h2> */}
              <h4 className="vertical-timeline-element-subtitle">from Acharya Institute of Graduate Studies,Bengaluru</h4>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2023"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<i class="fa fa-circle" aria-hidden="true"></i>}
            >
              <p> Bachelor of Computer Application(BCA)
              </p><br></br>
              <h4 className="vertical-timeline-element-subtitle">from St. Berchmans College, Changanassery, Mahatma Gandhi University, Kottayam</h4>
             
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2020"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<i class="fa fa-circle" aria-hidden="true"></i>}
            >
              <p> Higher Secondary in Computer Science
              </p><br></br>
              <h4 className="vertical-timeline-element-subtitle">from St. Thomas H.S.S, Kozhencherry
BOARD OF HSE KERALA 2020</h4>
             
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<i class="fa fa-circle" aria-hidden="true"></i>}
            >
              <p> Secondary
              </p><br></br>
              <h4 className="vertical-timeline-element-subtitle">from St. Thomas H.S.S, Kozhencherry,
KERALA STATE 2018
</h4>
             
            </VerticalTimelineElement>
            {/* More VerticalTimelineElement components */}
          </VerticalTimeline>
          
             

          </div>
        );
      };
      


export default A;
