export const getScrollbarWidth = () => {
    let oP = document.createElement('p');
    let styles = {
        width: '100px',
        height: '100px',
        overflowY: 'scroll'
    };
    for (let i in styles) {
        oP.style[i] = styles[i];
    }
    document.body.appendChild(oP);
    let scrollbarWidth = oP.offsetWidth - oP.clientWidth;
    oP.remove();
    return scrollbarWidth;
}
