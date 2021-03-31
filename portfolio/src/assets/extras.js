export let message = "Mink";
export function onPageEnd() {
  let toTop = document.querySelector('.toTop');
  if( document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      toTop.style.display = "block";
  }
  else {
    toTop.style.display = "none";
  }
}
export function toTop(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome
}