import '@babel/polyfill';
import * as DOMs from './DOMS';

//Global variables
let markups = [];

// localStorage.setItem('items', []);
if (localStorage.getItem('items')) {
  markups = JSON.parse(localStorage.getItem('items'));
  if (markups) {
    markups.forEach((markup) => DOMs.itemBox.insertAdjacentHTML('afterbegin', markup[0]));
  }
}

//DOMs Manipulation
DOMs.backArrow.addEventListener('click', () => {
  DOMs.listForm.style.display = 'none';
  DOMs.body.classList.remove('bodyFull');
});

DOMs.addbtn.addEventListener('click', () => {
  DOMs.listForm.style.display = 'flex';
  DOMs.body.classList.add('bodyFull');
});

DOMs.itemBox.addEventListener('click', (e) => {
  const element = e.target.closest('span');
  const num = element.parentElement.parentElement.dataset.index;
  const type = element.dataset.type;
  if (type === 'delete') {
    DOMs.deleteBox.style.display = 'flex';
    document.querySelector('body').classList.add('bodyFull');

    if (DOMs.deleteYesBtn) {
      DOMs.deleteYesBtn.addEventListener('click', () => {
        const index = markups.findIndex((curr) => curr[1] == num);

        markups.splice(index, 1);

        localStorage.setItem('items', JSON.stringify(markups));
        element.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement);
        DOMs.deleteBox.style.display = 'none';
        document.querySelector('body').classList.remove('bodyFull');

        location.reload(true);
      });
    }
    if (DOMs.deleteCancelBtn) {
      DOMs.deleteCancelBtn.addEventListener('click', () => {
        DOMs.deleteBox.style.display = 'none';
        document.querySelector('body').classList.remove('bodyFull');
      });
    }
  }
  // if (type === 'completed') {
  //   DOMs.completedBox.style.display = 'flex';
  //   document.querySelector('body').classList.add('bodyFull');

  //   if (DOMs.completedYesBtn) {
  //     DOMs.completedYesBtn.addEventListener('click', () => {
  //       element.parentElement.style.display = 'none';
  //       DOMs.completedBox.style.display = 'none';
  //       document.querySelector('.inbox__complete').style.display = 'block';
  //       const index = markups.findIndex((curr) => curr[1] == num);
  //       markups[index][0] = `<div class="inbox__item" data-index=${random}><p class="inbox__text">${task}</p>
  //       <span class="inbox__time">${time}</span><div class="inbox__icon"><span class="inbox__icon--completed" data-type="completed">
  //       <svg><use xlink:href="img/symbol-defs.svg#icon-check-circle-o"></use></svg></span>
  //       <span class="inbox__icon--delete" data-type="delete"><svg><use xlink:href="img/symbol-defs.svg#icon-times-circle-o"></use></svg></span></div>
  //       <div class="inbox__complete">Completed</div></div>`;
  //     });
  //   }
  //   if (DOMs.completedCancelBtn) {
  //     DOMs.completedCancelBtn.addEventListener('click', () => {
  //       DOMs.completedBox.style.display = 'none';
  //       document.querySelector('body').classList.remove('bodyFull');
  //     });
  //   }
  // }
});

//Add
DOMs.addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let task = DOMs.task.value;
  if (task.length > 20) {
    task = task.substring(0, 20);
  }
  let time = DOMs.time.value;
  if (time.length > 20) {
    time = time.substring(0, 20);
  }
  let random = Math.random();
  const markup = `<div class="inbox__item" data-index=${random}><p class="inbox__text">${task}</p>
    <span class="inbox__time">${time}</span><div class="inbox__icon">
    <span class="inbox__icon--delete" data-type="delete"><svg><use xlink:href="img/symbol-defs.svg#icon-cancel-circle"></use></svg></span></div>
    <div class="inbox__complete">Completed</div></div>`;

  markups.push([markup, random]);
  localStorage.setItem('items', JSON.stringify(markups));
  DOMs.itemBox.insertAdjacentHTML('afterbegin', markup);
  DOMs.task.value = '';
  DOMs.time.value = '';
  DOMs.listForm.style.display = 'none';
  location.reload(true);
});
//UI update
const today = new Date();
const month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
DOMs.today.textContent = `${month[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()} `;

DOMs.inbox.textContent = `INBOX(${markups.length})`;
