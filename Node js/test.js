

const arr = [
    {
        name: "hazem",
        age: 21,
        bloodType: "A"
    },
    {
        name: "alaaa",
        age: 24,
        bloodType: "O"
    },
    {
        name: "mohsen",
        age: 11,
        bloodType: "A"
    },
    {
        name: "ahmed",
        age: 41,
        bloodType: "B"
    }
]

const finder = (item) => {
    return item.name === "hazem";
}

const result = arr.find(finder)
console.log(result)