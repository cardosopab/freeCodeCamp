import { orderMap } from "../models/drumMachineModel";

export default function sortByOrderMap(arr) {
    arr.sort((a, b) => {
        const filenameA = a.replace(/^.*[\\/]/, '').split('.')[0];
        const filenameB = b.replace(/^.*[\\/]/, '').split('.')[0];
        return orderMap[filenameA][0] - orderMap[filenameB][0];
    });
}