function dictionary(jsonArray) {
    let myObjArray = [];
    for (let elem of jsonArray) {
        myObjArray.push(JSON.parse(elem));
    }

    
    let entries = [];
    
    for (let elem of myObjArray) {
        let dictEntry = {
            term: '',
            definition: ''
        }
        dictEntry.term = Object.keys(elem)[0];
        dictEntry.definition = Object.values(elem)[0];

        let flag = false;
        for (let el of entries) {
            if (el.term === dictEntry.term) {
                flag = true;
                el.definition = dictEntry.definition;
            }
        }
        if (flag) {
            //do nothing
        } else {
            entries.push(dictEntry);
        }
    }

    entries.sort((a, b) => a.term.localeCompare(b.term));

    for (let stuff of entries) {
        console.log(`Term: ${stuff.term} => Definition: ${stuff.definition}`)
    }

}