const validators = {
    email: (email, validation) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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