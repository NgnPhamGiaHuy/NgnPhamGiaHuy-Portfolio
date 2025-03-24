const divideSkillsIntoColumns = (skills: { name: string, url: string }[]) => {
    const columnCount = 3;
    const baseSize = Math.floor(skills.length / columnCount);
    const remainder = skills.length % columnCount;

    let start = 0;
    return Array.from({ length: columnCount }, (_, i) => {
        const columnSize = baseSize + (i < remainder ? 1 : 0);
        const column = skills.slice(start, start + columnSize);
        start += columnSize;
        return column;
    });
};

export default divideSkillsIntoColumns;