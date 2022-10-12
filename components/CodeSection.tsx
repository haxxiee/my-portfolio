import { FC } from "react";

const CodeSection: FC = () => {
  return (
    <div className="w-[95%] h-[95%] bg-slate-800 rounded-2xl">
      <code className="flex justify-start flex-col ml-4 mt-4 font-code font-semibold text-gray-300">
        <span className="mb-1">
          <span className="text-purple-500">export const</span>{" "}
          <span className="text-blue-500">Linus</span>
          <span className="text-cyan-500">{": Person "}</span>
          <span className="text-purple-500"> = </span> {" {"}
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;{"name: "}{" "}
          <span className="text-green-500">{"'Linus Foxell'"}</span>
          {","}
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;{"date:"}
          <span className="text-cyan-500"> new</span>
          <span className="text-blue-500"> Date</span>
          <span className="text-purple-500">(</span>
          <span className="text-green-500">{"'1995-10-29T03:24:00'"}</span>
          <span className="text-purple-500">)</span>
          {","}
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;{"occupation: "}
          <span className="text-green-500">{"'student'"}</span>
          {","}
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;{"residence: "}
          <span className="text-green-500">{"'Uppsala, Sweden'"}</span>
          {","}
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;{"techStack:"}
          <span className="text-blue-600"> linusStack</span>
          {","}
        </span>
        <span>{"}"}</span>

        <span className="mb-1 mt-4">
          <span className="text-purple-500">const </span>
          <span className="text-blue-600">linusStack</span>
          <span className="text-cyan-500">: Array</span>
          <span className="text-yellow-500">{"<"}</span>
          <span className="text-blue-500">tech</span>
          <span className="text-yellow-500">{"> "}</span>
          <span className="text-purple-500">= </span>
          {"["}
        </span>
        <span>
          <span className="text-blue-500">&nbsp;&nbsp;&nbsp;{"React"}</span>
          {","}
        </span>
        <span>
          <span className="text-blue-500">
            &nbsp;&nbsp;&nbsp;{"TypeScript"}
          </span>
          {","}
        </span>

        <span>
          <span className="text-blue-500">
            &nbsp;&nbsp;&nbsp;{"JavaScript"}
          </span>
          {","}
        </span>
        <span>
          <span className="text-blue-500">
            &nbsp;&nbsp;&nbsp;{"TailwindCSS"}
          </span>
          {","}
        </span>
        <span>
          <span className="text-blue-500">&nbsp;&nbsp;&nbsp;{"SASS"}</span>
          {","}
        </span>
        <span>
          <span className="text-blue-500">&nbsp;&nbsp;&nbsp;{"NodeJS"}</span>
          {","}
        </span>
        <span>
          <span className="text-blue-500">&nbsp;&nbsp;&nbsp;{"ExpressJS"}</span>
          {","}
        </span>
        <span>{"]"}</span>
      </code>
    </div>
  );
};

export default CodeSection;
