import FileExplorer from "./Components/FileExplorer";
import data from "./data.json";
import './index.css';

function App() {
  return (
    <>
      <FileExplorer folderData={data}/>
    </>
  )
}

export default App
