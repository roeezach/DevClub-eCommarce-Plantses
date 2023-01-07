export const FormService = (formParentElement, onSubmit) => {
    const form = formParentElement.querySelector('form');

    function validateForm() {
        let isFormValid = true;

        // Validate each form field
        for (const input of form.elements) {
            if (input.type === 'text' && input.value.trim().length < 2) {
                isFormValid = false;
                input.nextElementSibling.textContent = 'This field is required and must be at least 2 characters';
                input.nextElementSibling.style.color = 'red';
            } else if (input.type === 'number' && isNaN(input.value)) {
                isFormValid = false;
                input.nextElementSibling.textContent = 'This field must be a number';
                input.nextElementSibling.style.color = 'red';
            } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                isFormValid = false;
                input.nextElementSibling.textContent = 'This field must be a valid email';
                input.nextElementSibling.style.color = 'red';
            }
        }
        return isFormValid;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            onSubmit(form);
            resetForm();
        }
    });

    function resetForm() {
        form.reset();
    }
    return {
        onSubmit: function (callback) {
            onSubmit = callback;
        },
        isValid: function () {
            return validateForm();
        },
        onResetForm: function (callback) {
            resetForm = callback;
        }
    };
}

