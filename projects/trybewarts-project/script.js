const loginInput = document.getElementById('login');
const passInput = document.getElementById('pass');
const loginButton = document.getElementById('login-bt');
const submitCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const counterSpan = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectHouse = document.getElementById('house');

const dataLogin = {
  login: 'tryber@teste.com',
  pass: '123456',
};

function loginAuthentication() {
  const loginText = loginInput.value;
  const passText = passInput.value;
  if (dataLogin.login === loginText && dataLogin.pass === passText) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function agreeInfos() {
  if (submitCheck.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

function getTextAreaLength() {
  const textAreaText = textArea.value;
  return textAreaText.length;
}

function setCounterText() {
  const counterText = 500 - getTextAreaLength();
  counterSpan.innerText = counterText;
}

const submittedData = {
  firstname: '',
  lastname: '',
  email: '',
  house: '',
  family: '',
  skill: [],
  rate: '',
  comment: '',
};

function getSubmittedData() {
  submittedData.firstname = inputName.value;
  submittedData.lastname = inputLastName.value;
  submittedData.email = inputEmail.value;
  submittedData.house = selectHouse.value;
  submittedData.comment = textArea.value;
  submittedData.family = document.querySelector('input[name="family"]:checked').value;
  submittedData.rate = document.querySelector('input[name="rate"]:checked').value;
  const skillsElements = document.querySelectorAll('.subject:checked');
  submittedData.skill = Array.from(skillsElements, (el) => el.value);
  console.log(submittedData);
}

function createP(text) {
  const p = document.createElement('p');
  p.innerText = text;
  p.classList.add('p-info');
  form.appendChild(p);
}

function getSkills() {
  if (submittedData.skill.length === 1) return submittedData.skill[0];
  let skills = '';
  for (let skill = 0; skill < submittedData.skill.length; skill += 1) {
    if (skill === submittedData.skill.length - 1) {
      skills += `${submittedData.skill[skill]}`;
    } else {
      skills += `${submittedData.skill[skill]}, `;
    }
  }
  return skills;
}

function constructText() {
  createP(`Nome: ${submittedData.firstname} ${submittedData.lastname}`);
  createP(`Email: ${submittedData.email}`);
  createP(`Casa: ${submittedData.house}`);
  createP(`Família: ${submittedData.family}`);
  createP(`Matérias: ${getSkills()}`);
  createP(`Avaliação: ${submittedData.rate}`);
  createP(`Observações: ${submittedData.comment}`);
}

function setFinalInfos(e) {
  e.preventDefault();
  getSubmittedData();
  form.innerHTML = null;
  constructText();
}

loginButton.onclick = loginAuthentication;
submitCheck.onclick = agreeInfos;
textArea.addEventListener('input', setCounterText);
submitButton.onclick = setFinalInfos;
