
import Layout from '../Components/Layout';
import ProjectList from '../Components/ProjectList';
import ProjectTemplate from '../Components/ProjectTemplate';
import {projects_array} from '../sample_projects';

const Projects = () => (

    <Layout >
        <div className='Projects'>
            <h1>Projects page </h1>

            <p> Render a list of projets to check through API call</p>
            <p> - list should provide certain quick reference info about each project</p>
            <p> - list should provide title and project owner</p>

            <ProjectList projects={projects_array}/>

            <ProjectTemplate />

        </div>

    </Layout>
    
    );
    
    export default Projects;