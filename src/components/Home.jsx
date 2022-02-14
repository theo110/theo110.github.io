import AnimatedPage from "./AnimatedPage";
import Typewriter from "typewriter-effect";

function Home() {
  const nouns = ["software developer", "programmer", "leader"];
  let index = 0;
  return (
    <>
      <AnimatedPage>
        <body>
          <div className="title">
            Theo Roh
          </div>
          <div className="typewrite">
            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "An aspiring software developer",
                "A lifelong learner",
                "A reliable communicator and leader",
              ]
            }}
            ></Typewriter>
          </div>
        </body>
      </AnimatedPage>

    </>
  );
};

export default Home;