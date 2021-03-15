function format(data, format, { all, exept } = {}) {
    return Object.keys(data).reduce((acc, key) => {
        let name = ""
        let item = ""
        // return all
        if (all && !exept) {
            name = format[key] || key
            item = { [name]: data[key] }
            return {
                ...acc,
                ...item
            }
        }
        // exept
        if (exept) {
            name = format[key] ? null : key
            item = name && { [name]: data[key] }
            return {
                ...acc,
                ...item
            }
        }
        // Default
        name = format[key]
        item = name && { [name]: data[key] }
        return {
            ...acc,
            ...item
        }
    }, {})
}

const formater = {
    jobname: "jobName",
}
const data = {
    id: 1,
    hans: "77",
    jobname: "Name"
}

console.log("default    ; ", format(data, formater));
console.log("all:true   ; ", format(data, formater, { all: true }));
console.log("exept:true ; ", format(data, formater, { exept: true }));
