// const attr = (function(){

// function getAttr(node,prop){

//   // 0. 넘어온 대상이 문자인지를 체크
//   // 1. 체크 후 element node 로 변경해 줘야함.!

//   // const node = '.first';
//   // const prop = 'id';
//   // '.first'.getAttribute('id');

//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   return node.getAttribute(prop);

// }

// function setAttr(node,prop,value){

//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   // 전달받은 prop의 타입이 string이 아니라면 Error!

//   if(typeof prop !== 'string'){
//     throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
//   }

//   if(!node[prop] && prop !== 'class' && prop !== 'title'){
//     node.dataset[prop] = value;
//     return;
//   }

//   node.setAttribute(prop,value);
// }

// // 작은 함수를 만들고 보다 큰 함수로

// const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);

// function attr(node,prop,value){

//   // if(!value){
//   //   return getAttr(node,prop);
//   // }else{
//   //   setAttr(node,prop,value);
//   // }

//   return !value ? getAttr(node,prop) : setAttr(node,prop,value);

// }

//   return attr;

// // IIFE

// })()

// // getAttr()

// attr()

function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node 로 변경해 줘야함.!

  // const node = '.first';
  // const prop = 'id';
  // '.first'.getAttribute('id');

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

// 작은 함수를 만들고 보다 큰 함수로

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);




function attr(node, prop, value) {
  // if(!value){
  //   return getAttr(node,prop);
  // }else{
  //   setAttr(node,prop,value);
  // }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}




// 값을 가져오는 getAttr, setAttr을 한 번에 설정하기 위해 attr() 함수를 만들었다. value 가 있냐 없냐에 따라서 세번째 자리에 아무것도 안오면 getter, 무언가 오면 setter 로 되게 짜놓음, 








