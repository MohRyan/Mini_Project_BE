import React, { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from 'draftjs-to-html'

// export class EditorConvertToHTML extends Component {
//     state = {
//         editorState: EditorState.createEmpty(),
//     }

//     onEditorStateChange: any = (editorState: any) => {
//         this.setState({
//             editorState,
//         });
//     };

//     render() {
//         const { editorState } = this.state;
//         return (
//             <div>
//                 <Editor
//                     editorState={editorState}
//                     wrapperClassName="demo-wrapper"
//                     editorClassName="demo-editor"
//                     onEditorStateChange={this.onEditorStateChange}
//                 />
//                 <textarea
//                     disabled
//                     value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//                 />
//             </div>
//         );
//     }
// }

const AddArticle = () => {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    )

    const onEditorStateChange = (editorState: React.SetStateAction<EditorState>) => {
        setEditorState(editorState)
    }
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return (
        <div>
            <h1>Halo</h1>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
            {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            {/* <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            /> */}
            {/* <EditorConvertToHTML/> */}
        </div>
    )
}

export default AddArticle