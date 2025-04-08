const useColor = (data) => {
    const colorData = {
        'primary': '#CA1F34',
        'darkYellow': '#FAA61A',
        'darkGreen': '#70B865',
        'lightGreen': '#BDD753',
        'darkRed': '#8B151B',
    };

    const colors = Object.values(colorData); // Get the array of color values

    const updatedData = data.map((item, index) => {
        // Assign color using modulo to handle cases where data.length > colors.length
        const color = colors[index % colors.length];

        return {
            ...item,
            color: color,
        };
    });

    return updatedData;
}

export default useColor;
