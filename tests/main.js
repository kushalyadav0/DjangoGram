alert("hell");

const camera = async (constraints)=> {
    return await navigator.mediaDevices.getUserMedia(constraints);
}
window.onload = ()=> {
    const stream = camera({'video':true,'audio':true});
    console.log('Got MediaStream:', stream);
}