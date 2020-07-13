const validators = {
    email: (email, validation) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    date: (date, validation) => {
        date = new Date(date).toISOString().slice(0, 10);
        const currentDate = new Date().toISOString().slice(0, 10);
        if (validation.date) {
            return !(date > currentDate) ? false : true;
        }
    },
    photo: (img, validation) => {
        if (validation.photo) {
            return (img.size < 40000 || img.size > 16e6) ? false : true;
        }

    },
    minLength: (value, validation) => {
        if (validation.minLength) {
            return value.length < validation.minLength ? false : true;
        }
    },
    maxLength: (value, validation) => {
        if (validation.maxLength) {
            return value.length > validation.maxLength ? false : true;
        }
    },
    minNum: (value, validation) => {
        if (validation.minNum) {
            return value < validation.minNum ? false : true;
        }
    },
    maxNum: (value, validation) => {
        if (validation.maxNum) {
            return value > validation.maxNum ? false : true;
        }
    }
}

const isValid = (methods, value) => {
    return Object.keys(methods)
        .map((key) => {
            return validators[key] ? validators[key](value, methods) : null;
        })
        .filter((el) => el != null)
        .reduce((prev, curr) => !!curr * !!prev);
}

export function validationInput(value, validationSet) {
    if (value) {
        validationSet.changed = true;
        validationSet.valid = isValid(validationSet.validateOn, value);

    } else {
        validationSet.changed = false;
    }

    return validationSet;
}