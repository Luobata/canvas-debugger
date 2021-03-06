import { config } from './config';

const getFocus = (column, row) => {
    const arr = [];
    const beginX = 0;
    const beginY = 0;
    const body = document.body;
    const width = body.offsetWidth / column;
    const height = body.offsetHeight / row;

    for (let i = 0; i < column - 1; i++) {
        for (let j = 0; j < row - 1; j++) {
            arr.push([beginX + (i + 1) * width,
                beginY + (j + 1) * height]);
        }
    }


    return arr;
};

const createLine = (div) => {
    const body = document.body;
    const blockColumnNum = config.blockColumnNum;
    const blockRowNum = config.blockRowNum;
    const width = body.offsetWidth / blockColumnNum;
    const height = body.offsetHeight / blockRowNum;
    const beginX = 0;
    const beginY = 0;
    const focusPoint = getFocus(blockColumnNum, blockRowNum);

    for (let i = 0; i < blockColumnNum - 1; i++) {
        const column = document.createElement('div');

        column.style.width = '1px';
        column.style.height = '100%';
        column.style.background = '#FC6246';
        column.style.display = 'inline-block';
        column.style.position = 'absolute';
        column.style.left = `${beginX + (i + 1) * width}px`;

        div.appendChild(column);
    }

    for (let i = 0; i < blockRowNum - 1; i++) {
        const row = document.createElement('div');

        row.style.width = '100%';
        row.style.height = '1px';
        row.style.background = '#FC6246';
        row.style.display = 'inline-block';
        row.style.position = 'absolute';
        row.style.top = `${beginY + (i + 1) * height}px`;

        div.appendChild(row);
    }

    for (const i of focusPoint) {
        const pointWrap = document.createElement('div');
        const point = document.createElement('span');
        const pointTxt = document.createElement('span');
        const wid = 15;

        pointWrap.style.opacity = 0;
        pointWrap.style.position = 'absolute';
        pointWrap.style.cursor = 'pointer';
        pointWrap.style.left = `${i[0] - wid / 2 + 1 / 2}px`;
        pointWrap.style.top = `${i[1] - wid / 2 - 1 / 2}px`;

        point.style.width = `${wid}px`;
        point.style.height = `${wid}px`;
        point.style.background = '#FC6246';
        point.style.display = 'block';
        point.style['border-radius'] = `${wid}px`;
        point.style['vertical-align'] = 'top';

        pointTxt.innerText = `(${i[0]},${i[1]})`;
        pointTxt.style.position = 'absolute';
        // pointTxt.style.left = '-50%';
        pointTxt.style.top = '20px';

        pointWrap.addEventListener('mouseover', function mouseover() {
            this.style.opacity = 1;
        });

        pointWrap.addEventListener('mouseout', function mouseout() {
            this.style.opacity = 0;
        });

        pointWrap.appendChild(point);
        pointWrap.appendChild(pointTxt);

        div.appendChild(pointWrap);
    }

    body.appendChild(div);
};

const createWrap = () => new Promise((resolve) => {
    window.onload = () => {
        const body = document.body;
        const div = document.createElement('div');
        div.style.width = `${body.offsetWidth}px`;
        div.style.height = `${body.offsetHeight}px`;
        div.style.position = 'fixed';
        div.style['z-index'] = 1000;
        div.style.top = 0;
        div.style.left = 0;

        resolve(div);
        // body.appendChild(div);
    };
});

export default () => {
    createWrap()
        .then((div) => {
            createLine(div);
        });
};
