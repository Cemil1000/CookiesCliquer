import React, { useState } from "react";
import ReactDOM from "react-dom";

import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <CookiesScors score={score} setScore={()=>{setScore(score+1)}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
