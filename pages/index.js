import Layout from '../Components/Layout';
import Weather from '../Components/Weather';
import ProjectList from '../Components/ProjectList';


const Index = () => (

    <Layout>

        <div className = "Index">
        
            <h1>Home</h1>
            <p>Hello World, this is your project tracker</p>

            <ProjectList />

            <Weather />



        </div>


    </Layout>

);



export default Index;