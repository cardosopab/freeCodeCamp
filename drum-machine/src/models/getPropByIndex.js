import { orderMap } from "../models/drumMachineModel";

export default function getPropByIndex(index) {
    const matchingEntry = Object.entries(orderMap).find(([key, [orderIndex]]) => orderIndex === index);
    if (matchingEntry) {
        // return matchingEntry[1][1];
        const [, [orderIndex, prop]] = matchingEntry;
        return prop;
    }
    return '';
};