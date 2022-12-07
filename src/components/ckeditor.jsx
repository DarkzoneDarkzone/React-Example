import React from 'react'
import { CKEditor } from 'ckeditor4-react';

function Ckeditor() {
  // const [content, setContent] = useState('')
  return (
    <React.Fragment>
        <CKEditor
          // config={configObject}
          debug={true}
          // editorUrl="https://your-website.example/ckeditor/ckeditor.js"
          initData={<p>Hello from CKEditor 4!</p>}
          name="my-ckeditor"
          onNamespaceLoaded={ CKEDITOR => {
              // Handles `namespaceLoaded` event which is fired once the CKEDITOR namespace is loaded.
              // This event is emitted only once.
          } }
          onBeforeLoad={ CKEDITOR => {
              // Handles `beforeLoad` event which is fired before an editor instance is created.
          } }
          onInstanceReady={ ( { editor } ) => {
              // Handles native `instanceReady` event.
          } }
          onFocus={ ( { editor } ) => {
              // Handles native `focus` event.
          } }
          onCustomEvent={ ( { editor } ) => {
              // Handles custom `customEvent` event.
          } }
          readOnly={false}
          style={ { borderColor: 'blue' } }
          type="classic"
        />
      </React.Fragment>
  )
}

export default Ckeditor