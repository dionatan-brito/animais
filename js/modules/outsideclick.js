export function outSideclick(element,events,callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        events.forEach(userEvent =>{
        html.addEventListener(userEvent, handleOutSideClick);

        })
        element.setAttribute(outside, "")
        }
    
        function handleOutSideClick(event){

            if(!element.contains(event.target)){
        
                element.removeAttribute(outside)
                events.forEach(userEvent =>{
                html.removeEventListener(userEvent, handleOutSideClick)
                    
                })
                   callback()  
            }
        }
    }