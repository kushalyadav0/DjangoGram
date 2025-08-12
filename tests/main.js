alert("hell");

const camera = async (constraints)=> {
    return await navigator.mediaDevices.getUserMedia(constraints);
}
window.onload = ()=> {
    const stream = openMediaDevices({'video':true,'audio':true});
    console.log('Got MediaStream:', stream);
}