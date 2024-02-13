export default function cleanSet(set, startString) {
    const parts = []
    if (!set || !startString)
    {
        return "";
    }
    for (const value of set.values())
    {
        if (typeof value === "string" && value.startsWith(startString)) {
            const valueStr = value.substring(startString.length);
            if (valueStr)
            {
                parts.push(valueStr)
            }
        }
    }
    return parts.join('-');
}