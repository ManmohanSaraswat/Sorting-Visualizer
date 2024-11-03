import {Refresh} from "./Array";
import {GREEN_COLOR, PINK_COLOR, RED_COLOR} from "./Constants";

let m = 0,
    j = 0,
    i = 0;

function Selection(a, color, setVal, setColor, setProgress, mm) {
    if (m < a.length) {
        if (j === a.length) {
            j = m + 1;
            let temp = a[m];
            a[m] = a[i];
            a[i] = temp;
            color[m] = "#F59665";
            setVal([...a]);
            if (m !== i) color[i] = PINK_COLOR;
            m += 1;
            i = m;
            setColor([...color]);
        }
        color[i] = RED_COLOR;
        if (a[j] < a[i]) {
            color[i] = PINK_COLOR;
            i = j;
            color[i] = RED_COLOR;
        }
        color[j] = GREEN_COLOR;
        j += 1;
        setColor([...color]);
        color[j - 1] = PINK_COLOR;
    } else {
        Refresh();
        setProgress({color: "default", disabled: false});
        clearInterval(mm);
    }
}

const ClearSelection = () => {
    m = 0;
    j = 0;
    i = 0;
};
export default Selection;
export {ClearSelection};
