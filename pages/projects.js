import Layout from '../Components/Layout';
import ProjectModule from '../Components/ProjectComponents/ProjectModule';

const Projects = () => (

    <Layout >
        <div className='Projects'>
            <h1>Projects page </h1>

            <p> Render a list of projets to check through API call</p>
            <p> - list should provide certain quick reference info about each project</p>
            <p> - list should provide title and project owner</p>

            <ProjectModule />

        </div>

    </Layout>
    
    );
    
    export default Projects;