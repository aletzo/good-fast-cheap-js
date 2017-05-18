let values = [];

const toggle = (field) => {
    const index = values.indexOf(field);

    if (index == -1) {
        if (values.length == 2) {
            const removedField = values.shift();
            document.getElementById(removedField).checked = false;
        }

        values.push(field);
    } else {
        values.splice(index, 1);

    }
}

