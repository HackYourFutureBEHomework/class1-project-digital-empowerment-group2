import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// let  quill = new Quill('#content-evalution',{
//     module: {
//       toolbar:toolbarOption
//     }
//   })
var toolbarOption = [
    [{ header: [1,2,3,4,5,6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [
      { list: 'ordered' }, { list: 'bullet' }
    ],
    ['link', 'image', 'video'], 
    [{'indent':'-1'},{'indent':' +1'}],
    [{'size': ['small', false, 'large', 'huge']}],
    [{'color': []}, {'background': []}],
    [{'align':[]}], [{'font': []}]
    ['clean']
  ]

  
     const editorOptions = (props ) =>{


        

        // <script > {
        //     $('#saveExplanation').click(function () => {
        //         var Explanation = quill.getContents();
        //          console.log(Explanation)
        //        })} </script>

        return(
            <div>
        <form>
            <h3> Contents for the evaluation</h3>
            <div className = 'content for evaluation'> 
                    <button id = 'saveExplanation' type='button'
                    onClick ={this.saveExplanation}                    
                    > Explanation</button>
                    <button id = 'saveExercise' type='button'>    Exercise</button>
                    <button id = 'saveEvaluation' type='button' > Evaluation</button>
            </div>
        </form>
        </div>
        )
    }
export default editorOptions