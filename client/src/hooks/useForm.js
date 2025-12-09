import { useState } from "react";

export function useForm(callback, initialValues) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setValues(state => ({
            ...state,
            [name]: value
        }));
    }

    const formAction = (formData) => {
        callback(values, formData);
    }

    const bindField = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName]
        }
    }

    return {
        values,
        setValues,
        bindField,
        changeHandler,
        formAction
    }
}