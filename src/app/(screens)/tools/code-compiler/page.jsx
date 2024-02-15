'use client'
import JSEditor from "@/app/(components)/(code-editors)/JSEditor"
import { Button } from "@/components/ui/button";
import { HOSTNAME } from "@/constants/constants";
import { supportedLanguages } from "@/data/supportedLanguage"
import { useEffect, useState } from "react"

export default function CodeCompiler() {
    const [code, setCode] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(1);
    const [output, setOutput] = useState("");

    const runCode = async() => {
        const res = await fetch(`${HOSTNAME}/api/compiler`, {method: "POST", body: JSON.stringify({code: code.replace(/\n/g, ' ')}), cache: "no-store"})
        const data = await res.json()
        setOutput(data?.output || "")
      };

    return (
        <div className="container">
            <p className="text-right font-thin text-sm text-lightGray">This tools is in beta and not working properly yet!</p>
            <div className="flex items-center my-5">
                {
                    supportedLanguages.map((lang) => {
                        return <span key={lang.id} onClick={() => setSelectedLanguage(lang.id)} className={`p-2 me-3 border-[1px] rounded-full cursor-pointer hover:scale-105 hover:transition-all ${selectedLanguage === lang.id ? "bg-active text-white" : "text-active"}`}>{lang.language}</span>
                    })
                }
            </div>
            <div className="flex items-center justify-between w-full">
                <JSEditor setCode={setCode} code={code} />
                <aside className="w-[48%] bg-white h-[400px] rounded-md overflow-hidden">
                    <div className="bg-slate-200 pl-2 shadow-lg flex justify-between items-center">
                        <p className="text-active">Output</p>
                        <Button onClick={runCode} variant="outline" className="bg-slate-400 text-white">Run</Button>
                    </div>
                    <div className="w-[100%] h-full p-2 text-active">
                        <label className="font-bold text-darkGray text-sm block" htmlFor="output">Generated Output is: </label>
                        <span className="font-thin text-lightGray mb-5 text-xs block">ignore if output will come two times</span>
                       {output}
                    </div>
                </aside>
            </div>

        </div>
    )
}