import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Label, Textarea, Button } from "flowbite-react";
function Task() {
  let img_src =
    "https://www.researchgate.net/publication/220390292/figure/fig5/AS:669089911541766@1536534874234/Sample-copy-of-the-original-Tibetan-text.ppm";
  let text = "kajsdifjaoisjdfoiajsoidfjaoisjdfioajsdoifjaoidfjoaisjdfoija";
  let [textInput, setInput] = useState(text);
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-1 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <img
          src={img_src}
          alt="Google"
          className="max-h-[40vh] object-contain"
        />
        <div className="w-full">
          <div className="mb-2 block w-6/12 mx-auto">
            <Label htmlFor="comment" value="transcribe" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            className="w-6/12 mx-auto overflow-auto"
            rows={4}
            value={textInput}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex gap-3 justify-around items-center mt-2">
          <Button className="bg-green-500 hover:bg-green-400">Submit</Button>
          <Button className="bg-red-500 hover:bg-red-400">Reject</Button>
        </div>
      </div>
    </div>
  );
}

export default Task;
