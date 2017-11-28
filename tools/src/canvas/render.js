import { config } from './config';

const getFocus = () => {
};

const createLine = (div) => {
    const body = document.body;
    const blockNum = config.blockNum;
    const width = body.offsetWidth / blockNum;
    const height = body.offsetHeight / blockNum;
    const beginX = 0;
    const beginY = 0;
    const focusPoint = getFocus();

    for (let i = 0; i < blockNum - 1; i++) {
        const line = document.createElement('div');
        const row = document.createElement('div');
        line.style.width = '1px';
        line.style.height = '100%';
        line.style.background = '#FC6246';
        line.style.display = 'inline-block';
        line.style.position = 'absolute';
        line.style.left = beginX + (i + 1) * width + 'px';

        div.appendChild(line);

        row.style.width = '100%';
        row.style.height = '1px';
        row.style.background = '#FC6246';
        row.style.display = 'inline-block';
        row.style.position = 'absolute';
        row.style.top = beginY + (i + 1) * height + 'px';

        div.appendChild(row);
    }

    body.appendChild(div);
};

const createWrap = () => {
    return new Promise((resolve) => {
        window.onload = () => {
            const body = document.body;
            const div = document.createElement('div');
            div.style.width = body.offsetWidth + 'px';
            div.style.height = body.offsetHeight + 'px';
            div.style.position = 'fixed';
            div.style.top = 0;
            div.style.left = 0;

            resolve(div);
            //body.appendChild(div);
        }
    });
};

export default () => {
    createWrap()
        .then((div) => {
            console.log(div);
            createLine(div);
        });
};
