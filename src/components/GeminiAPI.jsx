import React, { useState, useRef } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDm8iAOSoBQKLrzvw6Xsd8ouSDgrP97CQg");

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// const fakeResponse = new Promise((res, rej) => {
//   try {
//     setTimeout(() => {
//       res("AI: Hello World");
//     }, 3000);
//   } catch (error) {
//     rej(error);
//   }
// });

const GeminiAPI = (props) => {
  const [listConversation, setListConversation] = useState([]);

  const [loading, setLoading] = useState(false);

  const inputRef = useRef("");

  const onSubmit = async () => {
    const inputValue = inputRef.current.value;

    if (!inputValue) return;

    // logic generate content

    setLoading(true);

    const resAPI = await model.generateContent(inputValue);

    const textRes = resAPI.response.text();

    setListConversation((preValue) => {
      return [
        ...preValue,
        {
          id: Date.now() + "_user",
          type: "user",
          message: inputValue,
        },
        {
          id: Date.now() + "_bot",
          type: "bot",
          message: textRes,
        },
      ];
    });

    setLoading(false);
  };

  return (
    <div className="geminiApiContainer">
      <div className="geminiApi">
        <button
          onClick={props.handleToggleModal}
          className="bg-amber-200 rounded-sm p-1 hover:bg-amber-600 hover:text-white"
        >
          GeminiAPI
        </button>

        {/*  modal gemini API */}
        {props.modalGeminiAPI ? (
          <div className="boxGeMiniAPI">
            <div className="conversation">
              {listConversation.map((item) => {
                if (item.type == "user") {
                  return (
                    <div className="userType" key={item.id}>
                      <span className="bold">user</span>: {item.message}
                    </div>
                  );
                }
                return (
                  <div className="botType" key={item.id}>
                    <span className="bold">bot</span>: {item.message}
                  </div>
                );
              })}

              {loading ? <div>Loading...</div> : ""}
            </div>

            <div className="requestAI">
              <input
                type="text"
                placeholder="Typing..."
                ref={inputRef}
                className="w-full border"
              />
              <button className="pointer" onClick={onSubmit}>
                Send
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GeminiAPI;
