import Project from '../components/Project';
import FreshTomatoes from '../images/FreshTomatoes-screenshot.png'
import Fur from "../images/Fur-companion-pilot-screenshot.png";
import Note from "../images/NoteTracker.png";
import TextEditor from '../images/Text-editor.png';
import FirstPortfolio from '../images/FirstPortfolio.png';
import README from '../images/README.md Generator.png';

const projects =[
    {
        title:'FreshTomatoes',
        hub:"ThomasVTran",
        deployed:"Heroku Deployment",
        image:FreshTomatoes,
        deployedLink:"https://secure-chamber-09606-709b0e7a0ed2.herokuapp.com/",
        hubLink:"https://github.com/ThomasVTran/movie-club?tab=readme-ov-file",
    },
    {
        title:'Fur-Companion-pilot',
        hub:"ThomasVTran",
        deployed:"",
        image:Fur,
        deployedLink:"",
        hubLink:"https://thomasvtran.github.io/fur-companion-pilot/",
    },
    {
        title:'Note Tracker',
        hub:"ThomasVTran",
        deployed:"Heroku Deployment",
        image:  Note,
        deployedLink:"https://guarded-scrubland-98500-8a9de5484cb0.herokuapp.com/notes",
        hubLink:"https://github.com/ThomasVTran/Note-Tracker?tab=readme-ov-file",
    },
    {
        title:'Text Editor',
        hub:"ThomasVTran",
        deployed:"Render Deployment",
        image:TextEditor,
        deployedLink:"https://thomas-text-editor.onrender.com",
        hubLink:"https://github.com/ThomasVTran/Text-editor",
    },
    {
        title:'First Portfolio',
        hub:"ThomasVTran",
        deployed:"",
        image: FirstPortfolio,
        deployedLink:"",
        hubLink:"https://github.com/ThomasVTran/mock-up-portfolio",
    },
    {
        title:'README Builder',
        hub:"ThomasVTran",
        deployed:"",
        image: README,
        deployedLink:"",
        hubLink:"https://github.com/ThomasVTran/README-builder-template",
    },
]
function Portfolio() {
  return (
      <Project projects={projects}/>
    );
}

export default Portfolio;
