


const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container');


// 누른 대상을 찾기
// 누른 대상의 data-name 값 찾기


function createComment(user,value){
    const template = /* html */ `
        <div class="id" data-comment-id="">
            <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
            <div class="comment_field">
                <div class="text_container">
                    <div class="name"><a href="#">${user}</a></div>
                    <div class="text_field">${value}</div>
                </div>
            </div>
        </div>
        `

        return template;
}

// commentContainer.scrollTop = commentContainer.scrollHeight 를 함수로 만들면,
function endScroll(target){
    target.scrollTop = target.scrollHeight;
    return target.scrollHeight;
}

function clearContents(target){
  
    if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA'){
  
      target.value = ''
      return;
    }
  
    target.textContent = ''
  
}






const handleArticle = (e) => {
    
    let target = e.target;
    let name = target.dataset.name

    while(!name){

        // target 에게 재할당 해주기
        target = target.parentNode;
        name = target.dataset.name
        
        // nodeName 은 대문자를 반환하기 때문에 BODY는 대문자로 작성
        if(target.nodeName === 'BODY'){
            target = null;
            return;
        }
    }
    // name 을 찾지 못했을 때 순환을 돌며 부모를 찾아 조회해주도록

    if(name === 'like'){
        // target.classList.add('active'); 
        // target.classList.toggle('active'); 을 우리가 만든 함수로 만들면
        toggleClass(target,'active');
    }

    if(name === 'more'){
        toggleClass(target,'active');
    }
    
    if(name === 'comment'){
        textField.focus();
    }

    if(name === 'send'){

        let value = textField.value;

        if(value === '') return;

        
        // send 버튼을 눌렀을 때 .comment_container 에 template 을 넣어주겠다.
        insertLast('.comment_container',createComment('김희소',value));

        endScroll();

        clearContents(textField);
    }





}










contents.addEventListener('click',handleArticle)