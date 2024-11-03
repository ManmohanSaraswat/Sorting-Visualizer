import {Refresh} from "./Array";
import {GREEN_COLOR, PINK_COLOR, RED_COLOR} from "./Constants";

let largest,
    x,
    nth,
    k = 1,
    n,
    i,
    flag = true,
    i1,
    m = -1,
    check = true;

function Heap(arr, color, setVal, setColor, setProgress, mm) {
    if (k === 1) {
        n = arr.length;
        i = Math.floor(n / 2) - 1;
        k = 0;
        x = 0;
        i1 = n - 1;
    }
    if (i >= 0 && flag) {
        largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            color[largest] = RED_COLOR;
            color[i] = RED_COLOR;
            setColor([...color]);
            color[largest] = PINK_COLOR;
            color[i] = PINK_COLOR;
            i = largest;
        } else {
            i--;
            color[i] = GREEN_COLOR;
            setColor([...color]);
            color[i] = PINK_COLOR;
        }
    } else {
        flag = false;
        if (i1 > 0) {
            color[i1] = "#F59665";
            if (check) {
                let temp = arr[0];
                arr[0] = arr[i1];
                arr[i1] = temp;
                nth = i1;
                x = 0;
                check = false;
            }
            largest = x;
            let l = 2 * x + 1;
            let r = 2 * x + 2;

            if (l < nth && arr[l] > arr[largest]) largest = l;

            if (r < nth && arr[r] > arr[largest]) largest = r;

            if (largest !== x) {
                let temp = arr[x];
                arr[x] = arr[largest];
                arr[largest] = temp;
                x = largest;
            } else {
                i1--;
                check = true;
            }
        }
        if (i1 === 0) {
            color[0] = "#F59665";
            Refresh();
            setProgress({color: "default", disabled: false});
            clearInterval(mm);
        }
        setColor([...color]);
    }

    setVal([...arr]);
}

const ClearHeap = () => {
    largest = 0;
    x = 0;
    nth = 0;
    k = 1;
    n = 0;
    i = 0;
    flag = true;
    i1 = 0;
    m = -1;
    check = true;
};
export default Heap;
export {ClearHeap};
