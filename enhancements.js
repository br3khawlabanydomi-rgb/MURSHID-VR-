// Accessibility, bounded movement and bilingual audio for headset activities.
const sceneEl=$('scene');
let lastMode=false;
function comfortLoop(){
  requestAnimationFrame(comfortLoop);
  if(!window.AFRAME||!$('camera')?.object3D)return;
  const c=$('camera'),r=$('rig');
  const locked=paused||(!document.body.classList.contains('invr')&&!$('panel').classList.contains('hidden'));
  if(locked!==lastMode){c.setAttribute('wasd-controls','enabled',false);lastMode=locked}
  const p=c.object3D.position, rp=r.object3D.position;
  p.x=Math.max(-16-rp.x,Math.min(16-rp.x,p.x));p.z=Math.max(-29-rp.z,Math.min(16-rp.z,p.z));
}
comfortLoop();
const oldAction=action;
action=function(a){
  oldAction(a);
  if(a.startsWith('go:')||a==='start'||a==='next'||a==='safe'){
    if(document.body.classList.contains('invr')&&world)speak(t(worlds[world].story)+' '+t(worlds[world].q)+' '+worlds[world].a.map((v,i)=>`${i+1}. ${t(v)}`).join(' '));
  }
};
