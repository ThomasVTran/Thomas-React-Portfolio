import Portfolio from '../pages/Portfolio';
import FreshTomatoes from '../images/FreshTomatoes-screenshot.png'
import Fur from "../images/Fur-companion-pilot-screenshot.png";
import Note from "../images/NoteTracker.png";

const projects =[
    {
        title: 'FreshTomatoes',
        hub:    "ThomasVTran",
        deployed:   "Heroku Deployment",
        image:  FreshTomatoes,
        deployedLink:   "https://secure-chamber-09606-709b0e7a0ed2.herokuapp.com/",
        hubLink:  "https://github.com/ThomasVTran/movie-club?tab=readme-ov-file",
    },
    {
        title: 'Fur-Companion-pilot',
        hub:    "ThomasVTran",
        deployed:   "",
        image:  Fur,
        deployedLink:   "",
        hubLink:  "https://thomasvtran.github.io/fur-companion-pilot/",
    },
    {
        title: 'Note Tracker',
        hub:    "ThomasVTran",
        deployed:   "Herokue Deployment",
        image:  Note,
        deployedLink:   "https://guarded-scrubland-98500-8a9de5484cb0.herokuapp.com/notes",
        hubLink:  "https://github.com/ThomasVTran/Note-Tracker?tab=readme-ov-file",
    },
    {
        title: 'Project 4',
        hub:    "",
        deployed:   "",
        image:  "",
        deployedLink:   "",
        hubLink:  "",
    },
    {
        title: 'Project 5',
        hub:    "",
        deployed:   "",
        image:  "",
        deployedLink:   "",
        hubLink:  "",
    },
    {
        title: 'Project 6',
        hub:    "",
        deployed:   "",
        image:  "",
        deployedLink:   "",
        hubLink:  "",
    },
]
function Project() {
    return <Portfolio projects={projects}/>;
}

export default Project;
