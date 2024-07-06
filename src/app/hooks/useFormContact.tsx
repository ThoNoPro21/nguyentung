import { useState } from 'react';

const useContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: any) => {
        setValues(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };
    return { values, handleChange };
};

export default useContactForm;