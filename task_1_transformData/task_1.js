const transformData = (data) => {
    const result = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
        const record = data[i];
        let id, name, age;

        // Проходим по каждому элементу вложенного массива, извлекая необходимые значения
        for (let j = 0; j < record.length; j++) {
            const [key, value] = record[j];
            if (key === 'id') {
                id = value;
            } else if (key === 'name') {
                name = value;
            } else if (key === 'age') {
                age = value;
            }
        }

        // Формируем итоговый объект
        result[i] = {
            label: `${name}, ${age}`,
            value: id
        };
    }

    return result;
};

// Пример использования
const data = [
    [["id", 1], ["name", "Ivan"], ["age", 23]],
    [["id", 2], ["name", "Marina"], ["age", 30]],
    [["id", 3], ["name", "Anna"], ["age", 28]],
];

console.log(transformData(data));

