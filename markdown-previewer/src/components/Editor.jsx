import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/markdownSlice'

export default function Editor() {
  const dispatch = useDispatch()
  const markdown = useSelector(state => state.markdown.value)

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('initial.md');
        const markdownContent = await response.text();
        dispatch(add(markdownContent));
      } catch (error) {
        console.error('Error fetching Markdown:', error);
      }
    };
    fetchMarkdown();
  }, []);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    dispatch(add(inputValue));
  }

  return (
    <div  className='window editor'>
      <div className="tab">
        <h1><i className="fa-brands fa-free-code-camp"></i> Editor</h1>
        <i className="fa-solid fa-maximize expand"></i>
      </div>
      <textarea name="" id="editor" cols="40" rows="10" onChange={handleInputChange} value={markdown}></textarea>
    </div>
  )
}