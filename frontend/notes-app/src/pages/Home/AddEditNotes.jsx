import React, { use, useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md';
import axiosInstance from "../../utils/axiosInstance";
const AddEditNotes = ({notedata,type,getAllNotes,onClose,showToastMessage}) => {
    const[title,setTitle]=useState(notedata?.title || "");
    const[content,setContent]=useState( notedata?.content || "");
    const[tags,setTags]=useState(notedata?.tags || []);
    const[error,setError]=useState(null);

    const addNewNote=async()=>{
       try{
        const response=await axiosInstance.post("/api/notes/add-note",{
          title,
          content,
          tags,
        });
        if(response.data && response.data.note){
          showToastMessage("Note Added Successfully", "add");

          getAllNotes()
            onClose()
        }
       }catch(error){
          if(error.response && error.response.data &&  error.response.data.message){
            setContent(error.response.data.message);
          }
       }
    }
    const editNote=async()=>{
      const noteId=notedata._id;
      console.log("Editing note with ID:", noteId); 

      console.log("Editing note with ID:", noteId);
      try{
        const response=await axiosInstance.put("/api/notes/edit-note/"+noteId,{
          title,
          content,
          tags,
        });
        if(response.data && response.data.note){
          showToastMessage("Note Updated Successfully", "edit");

           getAllNotes()
            onClose()
        }
       }catch(error){
          if(error.response && error.response.data &&  error.response.data.message){
            setContent(error.response.data.message);
          }
       }
    }
   
    const handleAddNote=()=>{
        if(!title){
            setError("please enter the title");
            return;
        }
        if(!content){
            setError("please enter the content");
            return;
        }
      setError("");
      if(type === 'edit' ){
        editNote()
      }else{
        addNewNote()
      }
    }
  return (
    <div className='relative'>
      <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500'
      onClick={onClose}
      >
     <MdClose className='text-xl text-slate-400'/>
      </button>
      <div className='flex flex-col gap-2'>
        <label className='input-label'>TITLE</label>
        <input
          type='text'
          className='text-2xl text-slate-950 outline-none'
          placeholder='Go To Gym AT 5'
          value={title}
          onChange={({target})=>setTitle(target.value)}
        />
      </div>

     
      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>CONTENT</label>
        <textarea 
          type="text"
          className='text-sm text-slate-950 outline-none border rounded-md p-2' 
          placeholder='Write your note here...'
          rows={10}
          value={content}
          onChange={({target})=>setContent(target.value)}
        />
      </div>
      <div className='mt-3'>
        <label className="input-label">TAGS</label>
       <TagInput tags={tags} setTags={setTags}/>
      </div>
      {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
      <button className='bg-blue-700 w-full font-medium mt-5 p-3' onClick={handleAddNote}>
        {type=== 'edit'? 'UPDATE':'ADD'}
      </button>
    </div>
  )
}

export default AddEditNotes
