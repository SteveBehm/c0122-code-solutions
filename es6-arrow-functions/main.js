const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    // we don't want to use an arrow function here yet because
    // "this" gets defined at definition, which would then mean
    // "this" used later in the code block would be the window object
    $jokeForm.classList.add('d-none');
    const $introStatement = this.renderJokePhrase('Hey Flash...');
    this.appendJokePhrase($introStatement);
    setTimeout(() => {
      const $jokeSetup = this.renderJokePhrase(setup);
      this.appendJokePhrase($jokeSetup);
      setTimeout(() => {
        const $jokePunchline = this.renderJokePhrase(punchline);
        this.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: function (phrase) {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: function ($phrase) {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: function () {
    setTimeout(() => {
      $flashImage.setAttribute('src', this.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  // could use an arrow function for above function definition
  // because we are not using "this" in the code block
  // however, we don't have to do that
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  // what properties are being destructed? the setup and punchline are being destructed
  // where are they being destructured from? from the elements property or the traget property of the event object
  // which variables are they being assigned to? and being assigned to the setup and punchline variables
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
