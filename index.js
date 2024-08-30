let btnstories =document.getElementById('btn-stories');
let btnreels =document.getElementById('btn-reels');
let storys =document.getElementById('stories-sec');
let reels =document.getElementById('reels-sec');

btnstories.onclick=()=>{
    btnstories.style.color ='rgb(24,118,241)';
    btnreels.style .color ='black';
    btnreels.style.borderBottom ='none'
    btnstories.style.borderBottom ='3px solid rgb(24,118,241)'
    storys .style.display ='block'
    reels.style.display ='none'
};

btnreels.onclick=()=>{
    btnreels.style.color ='rgb(24,118,241)';
    btnstories.style.color ='black';
    btnstories.style.borderBottom ='none'
    btnreels.style.borderBottom ='3px solid rgb(24,118,241)'
    reels.style.display ='block';
    storys.style.display ='none';
};


// let addicon =document.getElementById('add-btn');
// addicon.onchange = function(){
//     profilepic.src = URL.createObjectURL(addicon.files[0]);
// };

let profilepic =document.getElementById('img');
let inputfile =document.getElementById('add-pic-video');
let postbutton =document.getElementById('postbtn');
// let postsSpace =document.getElementById('postspace');
let removepost =document.getElementById('removepost');
let newpost =document.getElementById("newpost");

// postbutton.onclick=()=>{
    inputfile.onchange=()=>{
        newpost.src=URL.createObjectURL(inputfile.files[0]);
        // newpost=`<img src="${newsrc}">`;
    }
    removepost.onclick=()=>{
        newpost.style.display ="none"
    }
// }
// inputfile.onchange = function(){
//     profilepic.src = URL.createObjectURL(inputfile.files[0]);
// };

let btnopenfile =document.getElementById('video-pic');
let closefile =document.getElementById('upload');
let btnclose =document.getElementById('close-file');
btnopenfile.onclick=()=>{
    closefile.style.display ='flex';
};
btnclose.onclick=()=>{
    closefile.style.display ='none';
};