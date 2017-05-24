/* Simple and Fast comparison two object.
 * TODO : need to add other types. Or create a factory for any type */
export const compareData = (exist: any, given: any) => {
    return JSON.stringify(exist) === JSON.stringify(given);
};