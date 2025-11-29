export default function formatData(data: any) {    
    const { name, age } = data

    return {
        name: name.toUpperCase(),
        age: age + " anos",
    };
}