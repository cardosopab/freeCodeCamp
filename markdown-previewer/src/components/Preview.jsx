import React from 'react'
import { useSelector } from 'react-redux'
import { marked } from 'marked'
import DOMPurify from 'dompurify';

marked.use({
    breaks: true,
    mangle: false,
    headerIds: false,
});


export default function Preview() {
    const markdown = useSelector(state => state.markdown.value)
    // const parsedHTML = marked.parse(markdown);
    const parsedHTML = DOMPurify.sanitize(marked.parse(markdown));
    const previewEl = document.getElementById('preview');
    console.log(previewEl)
    return (
        <>
            <div className='window preview'>
                <div className="tab">
                    <h1><i className="fa-brands fa-free-code-camp"></i> Preview</h1>
                    <i className="fa-solid fa-maximize expand"></i>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{ __html: parsedHTML }} />
            </div>
        </>
    )
}