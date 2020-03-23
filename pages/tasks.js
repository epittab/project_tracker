import Layout from '../Components/Layout';
import CreateTask from '../Components/TaskComponents/CreateTask';
import EditTask from '../Components/TaskComponents/EditTask';
import { useRouter } from 'next/router'




const Task = () => {

    const router = useRouter()
    const { pid } = router.query

    console.log(pid);
    return(
         
        <Layout >
            <div className='Tasks'>
            <h1> Task id: {pid}</h1>


            <p> Render a list of projets to check through API call</p>
            <p> - list should provide certain quick reference info about each project</p>
            <p> - list should provide title and project owner</p>

            <div className='Task-menu'>
                <div><span>New Taks</span></div>
                <div><span>View Edit</span></div>
            </div>

            <CreateTask />

            <EditTask />

            </div>

            <style jsx>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .Task-menu {
                    display: flex;
                    flex-direction: row:

                    height: 2rem;


                    cursor: pointer:
                }
                `}
            </style>

    </Layout>
       
    );  
}


export default Task;