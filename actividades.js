const dropArea= document.querySelector(".drop-area");
const dragText= dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input= dropArea.querySelector("#input-file");
let files;

button.addEventListener("click", (e) =>{
    console.log("click");
} );
input.addEventListener("change",(e)=>{
files=this.files;
dropArea.classList.add("active");
showFiles(files);
dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover",(e)=>{
e.preventDefault();
dropArea.classList.add("Active");
dragText.textContent="suelta para subir archivo";
});

dropArea.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    dropArea.classList.remove("Active");
    dragText.textContent="arrastra y suelta";
    });

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    files= e.dataTransfer.files;
    showFiles(files);
dropArea.classList.remove("Active");
dragText.textContent="arrastra y suelta";
});

function showFiles(files){
    if(files.length == undefined){
processFiles(files);
    }
    else {
        for(const file of files){
            processFiles(files);
        }
    }
}
function processFiles(file){
const docType = file.type;
const validExtensions = ['imagen/jnpeg', 'image/jpg','imagen/gif'];

if(validExtensions.includes(docType)){
    //archivo valido
    const fileReader= new fileReader();
    const id = `file-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener('load', e =>{
        const fileUrl = fileReader.result;
        const image=
        <div id="${id}" class="file-container">
            <img src='$ {fileUrl}' alt="${file.name}"></img>
                <div class = "status">
                    <span>${file.name}</span>
                    <span class="status-text">
                    loading... 
                    </span>
            </div>
        </div>
   
    document.querySelector('#preview').innerHTML=image + html;
     });
     fileReader.readAsDataURL(file);
     uploadFile(file, id);
}
else{
    alert("no es archivo valido");
}
}
async function uploadFile(file,id){
    const formData = new FormData();
    formData.append("file", file);
    try{
        const response= await fetch("http://localhost:3000/upload",{
            method: "POST",
            body: formData,
        });
        const responseText= await response.text();
        document.querySelector(
            `#${id}. status-text`
        ).innerHTML= `<span class="success"> Archivo subido correctamente...</span>`;
    }catch (error){
        document.querySelector(
            `#${id}. status-text`
        ).innerHTML= `<span class="failure"> Archivo no se a subido...</span>`;
    
    }

}