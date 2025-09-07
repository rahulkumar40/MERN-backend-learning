import { useState } from "react";
import SignUp from "./component/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen bg-gray-0 px-3 py-3">
        <h2>hi</h2>

        <div className="w-[1190px] h-[80vh] mx-auto">
          {/* <Signp/> */}
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
