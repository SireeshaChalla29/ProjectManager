import { useState } from "react";
import ProjectSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import Input from "./components/Input";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const[projectState, setprojectState] =useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });
function handleAddTask(text){
  setprojectState(prevState=>{
    const taskId=Math.random();
    const newTask={
      text: text,
      projectId: prevState.selectedProjectId,
      id:taskId,
    };
    return{
      ...prevState,
      tasks: [newTask, ...prevState.tasks]
    };
  });
}
function handleDeleteTask (id){
  setprojectState((prevState)=>{
    return{
      ...prevState,
      tasks: prevState.tasks.filter((task)=>task.id !== id),
    };
  });
}
  function handleSelectProject(id){
    setprojectState((prevState) => {
      return{
      ...prevState,
      selectedProjectId: id, 
    };
  });
}
function handleCancelAddProject(){
  setprojectState((prevState)=>{
    return{
      ...prevState,
      selectedProjectId: undefined,
    };
  });
}
function handleDeleteProject(){
  setprojectState((prevState)=>{
    return{
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
    };
  });
}
  function handleStartAddProject() {
    console.log("Adding new project...");
    setprojectState((prevState) => ({
        ...prevState,
        selectedProjectId: null, // Triggering NewProject view
    }));
}
function handleAddProject(projectData){
  setprojectState(prevState=>{
    const newProject={
      ...projectData,
      id:Math.random()
    };
    return{
      ...prevState,
      projects: [...prevState.projects, newProject]
    };
  });
}
const selectedProject= projectState.projects.find(project=> project.id=== projectState.selectedProjectId);
  console.log("ProjectState",projectState);
  let content =<SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  selectedProjectId={projectState.selectedProjectId}
  />;
  if(projectState.selectedProjectId===null)
    {
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if( projectState.selectedProjectId ===undefined){
    console.log("undefined")
    content=<NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className= "h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject}
      projects={projectState.projects}
      onSelectProject={handleSelectProject}/>
{content}
      
    </main>
  );
}

export default App;
