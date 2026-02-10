/**import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
*/
import { useEffect, useState } from "react";
import { fetchApplications } from "./api/applications";
import ApplicationsTable from "./components/ApplicationsTable";
import NewApplicationForm from "./components/NewApplicationForm";

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleCreated(app) {
    setApplications((prev) => [app, ...prev]);
  }

  function handleUpdated(updatedApp) {
    setApplications((prev) => 
    prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  }

  function handleDeleted(id) {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  }

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchApplications();
        console.log("Applications from backend: ", data);
        setApplications(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // <div style ={{ padding: "2rem" }}>
    //   <h1>Job Applications</h1>
    //   <pre>{JSON.stringify(applications, null, 2)}</pre>
    // </div>
    
    <div style={{ padding: "2rem" }}>
      <h1>Job Applications</h1>
      <NewApplicationForm onCreated = {handleCreated}/>
      
      <ApplicationsTable 
        applications = {applications}
        onUpdated = {handleUpdated}
        onDeleted = {handleDeleted}
      />
    </div>
  );


}

export default App;

/*
function App() {
  const [status, setStatus] = useState("");


useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Error connecting to server"));
}, []);


  return <h1>Backend status: {status}</h1>
  
}

export default App */



  /** const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) 
  */