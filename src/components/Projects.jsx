import React from "react";
import AnimatedPage from "./AnimatedPage";
import PathVis from '../images/pathvis.jpg';
import FitMe from '../images/fitme.jpg';
import ChessEval from '../images/chess.jpg';

function Projects() {
  return (
    <>
      <AnimatedPage>
        <h1>My Projects</h1>
        <body>
          <div className="projects-wrapper">
            <div className="data-wrapper">
              <div className="text-wrapper">
                <a href="https://theo110.github.io/pathfindingvisualizer/">Pathfinding Visualizer</a>
                <div className="description">
                  Fully interactive educational and fun webpage that allows for users to visualize pathfinding algorithms.
                  Able to fully customize the board. Made with ReactJS, JavaScript, HTML and CSS.
                </div>
              </div>
              <img className="preview" src={PathVis} alt="PathVis"></img>
            </div>
            <div className="data-wrapper">
              <div className="text-wrapper">
                <a href="https://github.com/theo110/chess-endgame-evaluator">Chess Endgame Evaluator</a>
                <div className="description">
                  Understand your chess endgames with this fully interactive webpage. Drag and drop pieces on the virtual board
                  in order to recieve the evaluation for the current board position. Made with ReactJS, jQuery, Flask, Python, Javascript, HTML and CSS.
                </div>
              </div>
              <img className="preview" src={ChessEval} alt="ChessEval"></img>
            </div>
            <div className="data-wrapper">
              <div className="text-wrapper">
                <a href="https://glacial-beach-44390.herokuapp.com/">Fit.Me</a>
                <div className="description">
                  "In order to restore life before the pandemic, we created Fit.Me, an app that allows you to find activity centers and programs near you that satisfy your health goals.
                  We incorporated an extremely fine search system that gives you information about the different sports and fitness facilities that are covid-safe and open for you!
                  Just specify your preferences, find an activity, and become one step closer to maintaining a health lifestyle." <br></br><br></br>
                  A UofTHacks 2022 project. Responsible for handling API requests and most of the frontend. Made with ReactJS, NodeJS, MongoDB, Javascript, HTML and CSS.
                </div>
              </div>
              <img className="preview" src={FitMe} alt="FitMe"></img>
            </div>
          </div>
        </body>
      </AnimatedPage>

    </>
  );
};

export default Projects;