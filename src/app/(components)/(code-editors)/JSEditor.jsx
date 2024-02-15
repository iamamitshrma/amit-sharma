import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

export default function JSEditor({setCode, code}) {
    function handleChange(e) {
        setCode(e)
    }
    return (
        <CodeMirror
            value={code}
            height="400px"
            className='w-[48%] rounded-md overflow-hidden'
            theme="light"
            extensions={[javascript({ typescript: false })]}
            onChange={handleChange}
        />
    )
}