import linkedinLogo from '../assets/linkedin-logo.png';
import githublogo from '../assets/github-logo.png';
import selfportrait from '../assets/self-portrait.jpeg'
import skillssectionimage from '../assets/skillssectionimage.png';
import LineBreaks from '../utils/functions';
import javaLogo from '../assets/java-logo.png';  
import kotlinlogo from '../assets/kotlin-logo.png';
import javascriptlogo from'../assets/javascript-logo.png';
import typescriptlogo from '../assets/typescript-logo.png';
import clogo from '../assets/c-logo.png';
import pythonlogo from '../assets/python-logo.png';
import sqllogo from '../assets/sql-logo.png';
import reactlogo from '../assets/react-logo.png';
import springlogo from '../assets/spring-logo.png';
import htmllogo from '../assets/html-logo.png';
import bootstraplogo from '../assets/bootstrap-logo.png';
import postgressqllogo from '../assets/postgressql-logo.png';
import csslogo from '../assets/css-logo.png';
import nginxlogo from '../assets/nginx-logo.png';
import postmanlogo from '../assets/postman-logo.png';
import expressjslogo from '../assets/expressjs-logo.png';
import nodejslogo from '../assets/nodejs-logo.png';
import webpacklogo from  '../assets/webpack-logo.png';
import webdevelopmentsectionimage from '../assets/webdevelopmentsectionimage.png';


/*

            <img className='reactlogo' src={reactlogo} alt='react logo' rel= "noopener noreferrer"/>
            <img className='htmllogo' src={htmllogo} alt='html logo' rel= "noopener noreferrer"/>

            <img className='springlogo' src={springlogo} alt='spring logo' rel= "noopener noreferrer"/>
*/

function Home() {
    const cvUrl = "https://www.canva.com/design/DAGPhUR2ZrA/Wr_uxaRVT0G7Lv0plUEzlg/view?utm_content=DAGPhUR2ZrA&utm_campaign=designshare&utm_medium=link&utm_source=editor";

    return (
        <div className='homeText'>
            <div className='introductionText'>
            <h1>Vasco Branco</h1>
            <LineBreaks count={2}/>
            
            <h2>Software Engineer</h2>
            <LineBreaks count={2}/>

            <h3>Hey there 👋, welcome to my website</h3>
            <LineBreaks count={2}/>

            <a href="https://www.linkedin.com/in/vasco-branco-0abb5930b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className='socialslogo' />
            </a>

            <a href="https://github.com/Vaasco" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} alt="GitHub" className='socialslogo' />
            </a>
            <LineBreaks count={2}/>

            <h2></h2>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                <button className='cvButton'>See my CV</button>
            </a>
            
            <img className='selfportrait'  src={selfportrait} alt='self-portrait' rel="noopener noreferrer"/>
            </div>
            <LineBreaks count={20}/>
            
            <div className='skillsTitle'>
            <h1>Skills</h1>
            <LineBreaks count={7}/>
            </div>

            <div className='skillsText'>
            <img className='skillsSectionImage' src={skillssectionimage} alt='skills section image' rel="noopener noreferrer"/>
            <h2>Programming languages, Frameworks and DevOps</h2>
            <LineBreaks count={3}/>
            <img className='javalogo' src={javaLogo} alt='java logo' rel= "noopener noreferrer"/>
            <img className='kotlinlogo' src={kotlinlogo} alt='kotlin logo' rel= "noopener noreferrer"/>
            <img className='javascriptlogo' src={javascriptlogo} alt='javascript logo' rel= "noopener noreferrer"/>
            <img className='typescriptlogo' src={typescriptlogo} alt='typescript logo' rel= "noopener noreferrer"/>
            <img className='clogo' src={clogo} alt='c logo' rel= "noopener noreferrer"/>
            <img className='pythonlogo' src={pythonlogo} alt='python logo' rel= "noopener noreferrer"/>
            <img className='githublogo' src={githublogo} alt='github logo' rel= "noopener noreferrer"/>
            <img className='sqllogo' src={sqllogo} alt='sql logo' rel= "noopener noreferrer"/>
            <img className='postgressqllogo' src={postgressqllogo} alt='postgressql logo' rel= "noopener noreferrer"/>

            <LineBreaks count={4}/>
            <h4>
                ⚡ Well-versed in programming paradigms, enabling flexible problem-solving approaches.
                <LineBreaks count={2}/>

                ⚡ Experience in developing software solutions using diverse programming languages.
                <LineBreaks count={2}/>
        
                ⚡ Proficiency in Git, GitHub, CI/CD, and code management.
                <LineBreaks count={2}/>

                ⚡ Skilled in writing clean, maintainable code with a focus on performance and readability across various tech stacks.
            </h4>
            </div>

            <LineBreaks count={40}/>
            <div className='webDevelopmentTitle'>
            <h1>Web Development</h1>
            </div>
            <LineBreaks count={4}/>
        
            <img className='webdevelopmentsectionimage' src={webdevelopmentsectionimage} alt='webdevelopmentsection logo' rel= "noopener noreferrer"/>
            <div className='webdevelopmentlogos'>
            <img className='htmllogo' src={htmllogo} alt='html logo' rel= "noopener noreferrer"/>
            <img className='csslogo' src={csslogo} alt='css logo' rel= "noopener noreferrer"/>
            <img className='reactlogo' src={reactlogo} alt='react logo' rel= "noopener noreferrer"/>
            <img className='springlogo' src={springlogo} alt='spring logo' rel= "noopener noreferrer"/>
            <img className='bootstraplogo' src={bootstraplogo} alt='bootstrap logo' rel= "noopener noreferrer"/>
            <img className='nginxlogo' src={nginxlogo} alt='nginx logo' rel= "noopener noreferrer"/>
            <img className='postmanlogo' src={postmanlogo} alt='postman logo' rel= "noopener noreferrer"/>
            <img className='expressjslogo' src={expressjslogo} alt='expressjs logo' rel= "noopener noreferrer"/>
            <img className='nodejslogo' src={nodejslogo} alt='node logo' rel= "noopener noreferrer"/>
            <img className='webpacklogo' src={webpacklogo} alt='webpack logo' rel= "noopener noreferrer"/>
            </div>
            <LineBreaks count={7}/>
            <div className='webDevelopmentText'>
            <h4>
                ⚡ Experienced in backend development, ensuring security and scalability.
                <LineBreaks count={2}/>
                ⚡ Building responsive user interfaces for web applications.
                <LineBreaks count={2}/>
                ⚡ Familiarity with tools like Webpack, NGINX, and Postman for efficient development and testing processes.
            </h4>
            </div>
        </div>
    
    );
}

export default Home;
