import { render } from "vue";


let color = '#fff';
export function messageAlert(type: string, message: string) {
    if (type === 'success') {
        color = '#84d65a';
    } else if (type === 'error') {
        color = '#f7c752';
    };

    const VNode = h('div',
        {
            class: 'message animate__animated animate__fadeInUp ',
            style: {
                minWidth: '150px',
                position: 'absolute',
                top: '1%',
                left: '50%',
                translate: '-50%',
                borderRadius: '8px',
                padding: '5px 10px',
                zIndex: '9999',
                backgroundColor: color,
                color: '#393A37',
                fontSize: '14px',

            }
        },
        [
            h('span', {
                style: {
                    marginRight: ' 10px ',
                }
            }, '我去'),
            h('p', {
                style: {
                    fontWeight: '500',
                    display: 'inline-block',
                    letterSpacing: '2px',
                }
            }, message)
        ]
    );
    const messagebox = document.createElement('div');
    const card = document.querySelector('.card ');
    card.appendChild(messagebox);
    render(VNode, messagebox);

    setTimeout(() => {
        card.removeChild(messagebox);
    }, 3000)

}