function format(data, format, { all, exept } = {}) {
    return Object.keys(data).reduce((acc, key) => {
        let name = ""
        let item = ""
        // return all
        if (all) {
            name = format[key] || key
            item = { [name]: data[key] }
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
