const deleteBtn = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deletetask);
    return i;
};
const deletetask = (event) => {
    const element = event.target.parentElement;
    element.remove();
};

    export default deleteBtn;