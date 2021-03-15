# How to use

```js
const formater = {
    jobname: "jobName",
}
const data = {
    id: 1,
    hans: "77",
    jobname: "Name"
}

format(data, formater)
// returns > { jobName: 'Name' }

format(data, formater, { all: true })
// returns > { id: 1, hans: '77', jobName: 'Name' }

format(data, formater, { exept: true })
// returns > { id: 1, hans: '77' }
```
