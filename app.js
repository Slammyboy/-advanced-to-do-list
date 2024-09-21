import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
        </nav>
    );
};

const Landing = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundImage: 'url(https://example.com/your-background-image.jpg)', backgroundSize: 'cover', color: 'white' }}>
            <h1>Welcome to Our To-Do List App</h1>
            <p>Stay organized and productive!</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>What Our Users Say</h2>
            <div>
                <p>"This app has transformed my productivity!" - Sarah</p>
                <p>"Simple and effective. I love it!" - John</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>About Our App</h2>
            <p>Our to-do list app is designed to help you stay organized and productive.</p>
        </div>
    );
};

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/testimonials" component={Testimonials} />
                    <Route path="/todos" component={TodoList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

