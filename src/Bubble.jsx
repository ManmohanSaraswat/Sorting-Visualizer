import {Refresh} from "./Array";
import {GREEN_COLOR, PINK_COLOR, RED_COLOR} from "./Constants";

let m = 0,
    j = 0;

function Bubble(a, color, setVal, setColor, setProgress, mm) {
    if (m !== a.length) {
        let temp;
        if (j < a.length - m - 1) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                color[j] = color[j + 1] = RED_COLOR;
                setVal([...a]);
                setColor([...color]);
                color[j] = color[j + 1] = PINK_COLOR;
            } else {
                color[j] = color[j + 1] = GREEN_COLOR;
                setColor([...color]);
                color[j] = color[j + 1] = PINK_COLOR;
            }
            j += 1;
        } else {
            color[j] = "#F59665";
            j = 0;
            m += 1;
        }
    } else {
        color[j] = "#F59665";
        color[j + 1] = "#F59665";
        setColor([...color]);
        clearInterval(mm);
        Refresh();
        setProgress({color: "default", disabled: false});
    }
}

const ClearBubble = () => {
    m = 0;
    j = 0;
};
export default Bubble;
export {ClearBubble};
