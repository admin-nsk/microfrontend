import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import "./App.css";


const {
    REACT_APP_DOGS_HOST: dogsHost,
    REACT_APP_CATS_HOST: catsHost,
} = process.env;

function Header() {
    return (
        <div className="banner">
            <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
            <h4>Random pics of cats and dogs</h4>
        </div>
    );
}

function Dogs({ history }) {
    return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
    return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
    return (
        <div>
            <Header />
            <div className="home">
                <MicroFrontend history={history} host={catsHost} name="Cats" />
            </div>
        </div>
    );
}

function Home({ history }) {
    const [input, setInput] = useState("");

    const handleOnClick = () => {
        history.push(`/cat/${input}`);
    };

    return (
        <div>
            <Header />
            <div className="home">
                <input
                    placeholder="Insert a greeting"
                    defaultValue={input}
                    onBlur={(e) => setInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Greet Me</button>
            </div>

            <div className="home">
                <div className="content">
                    <div className="cat">
                        <Cats />
                    </div>
                    <div className="dog">
                        <Dogs />
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/cat/:greeting" element={<GreetingCat/>} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;