import React from "react";

const GeminiAPI = () => {
  return (
    <div className="geminiApiContainer">
      <div className="geminiApi">
        <button className="bg-amber-200 rounded-sm p-1 hover:bg-amber-600 hover:text-white">
          GeminiAPI
        </button>

        <div className="boxGeMiniAPI">
          <div className="conversation">
            <div className="userType">user: abc...</div>
            <div className="botType">bot: aawdawd</div>

            <hr />
          </div>

          <div className="requestAI">
            <input
              type="text"
              placeholder="Typing..."
              className="w-full border"
            />
            <button className="pointer">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiAPI;
