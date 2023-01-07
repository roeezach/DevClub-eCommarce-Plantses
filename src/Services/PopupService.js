// const popupService = () => {
//     let popupElement = null;

//     const createPopupElement = (popupBody, options) => {
//         const isCloseByClickOutside = options.isCloseByClickOutside;
//         const popupClassName = options.popupClassName;

//         const popupWrapper = document.createElement('div');
//         popupWrapper.classList.add('popup-wrapper');
//         if (popupClassName) {
//             popupWrapper.classList.add(popupClassName);
//         }

//         const popupOverlay = document.createElement('div');
//         popupOverlay.classList.add('popup-overlay');
//         console.log(isCloseByClickOutside);
//         if (isCloseByClickOutside) {
//             popupOverlay.addEventListener('click', close);
//         }

//         const popupContent = document.createElement('div');
//         popupContent.classList.add('popup-content');
//         popupContent.innerHTML = popupBody;

//         popupWrapper.appendChild(popupOverlay);
//         popupWrapper.appendChild(popupContent);

//         return popupWrapper;
//     };

//     const open = (popupBody, options) => {
//         if (popupElement) {
//             close();
//         }
//         popupElement = createPopupElement(popupBody, options);
//         document.body.appendChild(popupElement);
//     };

//     const close = () => {
//         if (popupElement) {
//             document.body.removeChild(popupElement);
//             popupElement = null;
//         }
//     };

//     return {
//         open,
//         close,
//     };
// };

// export const myPopupService = popupService();

