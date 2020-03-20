import Layout from '../Components/Layout';
import Weather from '../Components/Weather';
import ProjectList from '../Components/ProjectList';
import {projects_array} from '../sample_projects';


const Index = () => (

    <Layout>

        <div className = "Index">
        
            <h1>Home</h1>
            <p>Hello World, this is your project tracker</p>

            <ProjectList projects={projects_array}/>

            <Weather />

            <style jsx>
                {`
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: sans-serif;
                    background-color: rgba(230, 230, 230, .8);
                    color: rgba(40, 40, 40, .8);
                }
                 
              
                `}
            </style>


        </div>


    </Layout>

);



export default Index;