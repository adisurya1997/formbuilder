import React,  { useState } from "react";
import dragula from "dragula";
import iSelect from "../components/image/iconselect.png";

export default function Homepage() {

    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right]);

    let list = document.getElementById('list');
    dragula([list]);

    const [hide, setHide] = useState(false);
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);

    const handlehide = () => {
      setHide(!hide);
    };
    const handlehideReact = () => {
      setHide1(!hide1);
    };
    const handlehideMaterial = () => {
      setHide2(!hide2);
    };

    const [optionList, setOptionList] = useState([{ value: 'option 1' }]);

    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...optionList];
      list[index][name] = value;
      setOptionList(list);
    };

    const handleServiceRemove = (index) => {
      const list = [...optionList];
      list.splice(index, 1);
      setOptionList(list);
    };
  
    const handleServiceAdd = () => {
      setOptionList([...optionList, { value: "" }]);
    };

    return (
        <>
          <div className="container">
          <div id="left" className="container">
          <h1 className="w-80 m-auto">View Component</h1>
          </div>
          {hide ? 
          <h1 className="hidden">2</h1>:
          <div id="right" className="container">
            <h1 className="text-center" style={{width:"100%"}} >Component</h1>
            <div className="ml-3">
              <label for="cars">Choose:</label>
                <select onClick={handlehide} name="select class"  id="cars">
                {optionList &&
                  optionList.map((item, index) => (
                  <option value={(item.value)}>{(item.value)}</option>
                  ))}
                </select>
                <img className="icon" src={iSelect} width="50px"></img>
            </div>           
          </div>
          }
          {hide ? 
          <div id="rightedit" >
            <h1 className="text-center" style={{width:"100%"}} >Edit Component</h1>
            <div className="ml-3">
                  <ul id="list" type="1">
                  {optionList.map((item, index) => (
                    <div key={index} className="services">
                      <div className="first-division">
                        <input
                          name="value"
                          type="text"
                          id="value"
                          placeholder={'option '+(index+1)}
                          value={item.value}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        {optionList.length - 1 === index && optionList.length < 4 && (
                          <button
                            type="button"
                            onClick={handleServiceAdd}
                            className="add-btn"
                          >
                            <span>Add a Service</span>
                          </button>
                        )}
                      </div>
                      <div className="second-division">
                        {optionList.length !== 1 && (
                          <button
                            type="button"
                            onClick={() => handleServiceRemove(index)}
                            className="remove-btn"
                          >
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  </ul>
            </div>
          </div> : ""}
          <div id="bottom1">
          <button id="edit" onClick={handlehideReact} className="w-40 h-10 bg-black text-orange-600 mx-auto flex justify-center mb-6 rounded-r-full rounded-l-full">React Code</button>
          
          {hide1 ? 
          <div>
            <p className="text-justify m-5">{"<select>"}</p>
            {optionList &&
              optionList.map((item, index) => (
            <div key={index}>
            {item.value && <p>{'<option value='+(item.value)+'>'+(item.value)+'</option>'}</p>}
            </div>
            ))}
            <p className="text-justify m-5">{"</select>"}</p>
          </div>
          :<h1 className="hidden">2</h1>}         
          </div>
          
          <div id="bottom2">
          <button id="edit" onClick={handlehideMaterial} className="w-40 h-10 bg-black text-orange-600 mx-auto flex justify-center mb-6 rounded-r-full rounded-l-full" >View Design Code</button>
          {hide2 ? 
          <select className="w-80 m-5">
            {optionList &&
              optionList.map((item, index) => (
             <option value={(item.value)}>{(item.value)}</option>
            ))}
          </select>
          :<h1 className="hidden">2</h1>}
          </div>
        </div>
        
      </>
      );
 
};