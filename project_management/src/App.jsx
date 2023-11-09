import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

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

  // handlerCancelAddProject
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
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
  
  // handler selected project
  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id
      }
    });
  }

  // handle delete project
  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        )
      }
    });
  }

  // find the project which was selected
  const selectedProject= projectState.projects.find(project => project.id === projectState.selectedProjectID);

  // content showcase
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  if(projectState.selectedProjectID === null) {
    content = (<NewProject onAdd={ handleAddProject } onCancel={handleCancelAddProject}/>);
  } else if(projectState.selectedProjectID === undefined) {
    content = (<NoProjectSelected onStartAddProject={handleStartAddProject} />);
  }

  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
        onSelectProject={handleSelectProject}
      />

      { content }
    </main>
  );
}

export default App;