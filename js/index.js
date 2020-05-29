import '@babel/polyfill';
import * as DOMs from './DOMS';

//UI update
const today = new Date();
const month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
DOMs.today.textContent = `${month[today.getMonth()]} ${today.getDay()}, ${today.getFullYear()} `;

// DOMs.inbox.textContent = `INBOX(${DOMs.deleteBtnsArr.length})`;
//DOMs Manipulation
DOMs.backArrow.addEventListener('click', () => {
  DOMs.listForm.style.display = 'none';
});

DOMs.addbtn.addEventListener('click', () => {
  DOMs.listForm.style.display = 'flex';
});

// inbox__container.addEventListener('click', (e) => {
//   const element = e.target.closest('div');

//   DOMs.deleteBox.style.display = 'flex';

//   if (DOMs.deleteYesBtn) {
//     DOMs.deleteYesBtn.addEventListener('click', () => {
//       element.parentElement.parentElement.removeChild(element.parentElement);
//       DOMs.deleteBox.style.display = 'none';
//     });
//   }
// });

// DOMs.deleteCancelBtn.addEventListener('click', () => {
//   DOMs.deleteBox.style.display = 'none';
// });

// DOMs.completedBtnsArr.forEach((cur) => {
//   cur.addEventListener('click', () => {
//     DOMs.completedBox.style.display = 'flex';
//   });
// });

// DOMs.completedCancelBtn.addEventListener('click', () => {
//   DOMs.completedBox.style.display = 'none';
// });

//Add
DOMs.addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = DOMs.task.value;
  const time = DOMs.time.value;
  const markup = `<div class="inbox__item">
  <p class="inbox__text">${task}</p>
  <span class="inbox__time">${time}</span>
  <div class="inbox__icon">
    <span class="inbox__icon--completed">
      <svg>
        <use xlink:href="img/symbol-defs.svg#icon-check-circle-o"></use>
      </svg>
    </span>
    <span class="inbox__icon--delete">
      <svg>
        <use xlink:href="img/symbol-defs.svg#icon-times-circle-o"></use>
      </svg>
    </span>
  </div>
</div>`;

  DOMs.itemBox.insertAdjacentHTML('afterbegin', markup);
  DOMs.task.value = '';
  DOMs.time.value = '';
  DOMs.listForm.style.display = 'none';
});
