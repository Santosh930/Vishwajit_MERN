import { useState, useCallback,useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //use ref hook
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHLJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_+=[]{}~`";
    for (let i = 0; i <length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
      console.log(index, pass);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyPasswordFromClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);

  },[password])
useEffect(()=>{
  passwordGenerator();

},[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700 text-center p-4">
      Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
           type="text"
           value={password}
           className="outline-none w-full py-1"
           readOnly
           placeholder="password"
           ref={passwordRef}
            />
            <button onClick={copyPasswordFromClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className="cursor-pointer"
             />
             <label htmlFor="">Length:{length}</label>
          </div>
          
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            className="cursor-pointer"
             />
             <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="characterInput"
            
            onChange={()=>{setCharAllowed((prev)=>!prev)}}
            className="cursor-pointer"
             />
             <label htmlFor="">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
