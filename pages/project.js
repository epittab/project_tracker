import Layout from '../Components/Layout';
import ProjectOverview from '../Components/PDetailComponents/ProjectOverview';
import { useRouter } from 'next/router'

    
const Project = () => {
        
    const router = useRouter();
    const pid = router.query;

    return (
        <Layout >
        <div className='Projects'>
        <h1>Project id: {pid['id']}</h1>
           
            <p> Render a specific project and display the tasks associated with it.</p>

            <p> - list should provide certain quick reference info about each project</p>
            <p> - list should provide title and project owner</p>

            <ProjectOverview id={pid['id']}/>

        </div>
        </Layout>
    
    )
    };
    
    export default Project;