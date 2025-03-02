import React from 'react'
import data from "../data.json"

const FileExplorer = () => {
    const [node,setNode]=React.useState(data)

    const addFolderToTree=(parentid,foldername)=>{
        const updateTree=(list)=>{
            return list.map((item)=>{
                 if(item.id===parentid){
                    return {...item,children:[...item.children,
                        {
                            id:Date.now().toString(),
                            name:foldername,
                            type:"folder",
                            children:[],
                            isFolder:true
                        }
                    ]}
                }
                else{
                    if(item.children){
                        return{...item,children:updateTree(item.children)}
                    }

                    else{
                        return item;
                    }
                }
            })
        }
        setNode((prev)=>updateTree(prev))
    }
  return (
    <Tree data={node} addFolderToTree={addFolderToTree}/>
  )
}

export default FileExplorer


const Tree=({data,addFolderToTree})=>{
    const [expanded,setExpanded]=React.useState({})
    const [addFolder,setAddFolder]=React.useState({})

    const handleClick=(id)=>{
        setExpanded({...expanded,[id]:!expanded[id]})
    }
    const [foldername,setFoldername]=React.useState("")
    const handleFolderName=(e,parentid)=>{
        
        if(e.key === "Enter"){
            setFoldername(e.target.value);
            addFolderToTree(parentid,e.target.value)
            setAddFolder(false)
            setAddFolder({...addFolder,[parentid]:!addFolder[parentid]})
        }
    }

    return <div style={{marginLeft:20}}>
        {data.map((node)=>{
            return <div>
                {node.type==="folder"?
                <div>
                    {addFolder[node.id] && <input type="text" value={foldername} autoFocus onChange={(e)=>setFoldername(e.target.value)} onKeyDown={(e)=>handleFolderName(e,node.id)}/>}
                    <span style={{cursor:"pointer"}} onClick={()=>handleClick(node.id)}>{expanded[node.id]?"-":"+"}</span>
                    <span>{node.name}</span>
                    <span onClick={()=>setAddFolder({...addFolder,[node.id]:!addFolder[node.id]})}><img loading='lazy' src="https://cdn1.iconfinder.com/data/icons/networking-glyph/32/add_file_folder_add_add_folder_create-512.png" alt="folder" style={{width:20,height:20,cursor:"pointer"}}/> </span>
                    <span><img loading='lazy' src="https://tse1.mm.bing.net/th?id=OIP.JpPFRgpBQSDwb_uzeGtWrQHaHa&pid=Api&P=0&h=180" alt="folder" style={{width:20,height:20,cursor:"pointer"}}/></span>
                    {expanded[node.id] && <Tree data={node.children} addFolderToTree={addFolderToTree}/>}
                </div>:
                <div>
                    <span>{node.name}</span>
                    {/* <img src={file} alt="file" style={{width:20,height:20}}/> */}
                </div>}
            </div>
        })}
    </div>
}