import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  // handle start project 
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    });
  }

  // handlerAddProject
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [
          ...prevState.projects, 
          newProject
        ]
      };
    });
  }
  
  let content;
  if(projectState.selectedProjectID === null) {
    content = <NewProject onAdd={ handleAddProject }/>
  } else if(projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  console.log(projectState.projects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
      />

      { content }
    </main>
  );
}

export default App;