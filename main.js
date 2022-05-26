let app = new Vue({
  el: '#app',

  data: {
    currentQuestion: 0,
    userAnswers: [],

    end: false,
    correctResults: 0,

    tests: {
      test1: {
        name: 'Test 1',
        description: 'This is Test 1',
        questions: [
          {
            name: '1?',
            answersOptions: ['Da', 'Net', 'Da1', 'Net1'],
            correctAnswer: 'Da',
          },
          {
            name: '2?',
            answersOptions: ['Da2', 'Net2', 'Da3', 'Net3'],
            correctAnswer: 'Net2',
          },
          {
            name: '3?',
            answersOptions: ['Da4', 'Net4', 'Da5', 'Net5'],
            correctAnswer: 'Net5',
          },
        ]
      },

      test2: {
        name: 'Test 2',
        description: 'This is test 2',
        questions: [
          '5?',
          '6?',
          '7?',
          '8?',
        ]
      }
    }
  },

  methods: {
    nextQuestion (value) {
      this.userAnswers.push(value);
      setTimeout(() => document.querySelector('form').reset(), 100);

      if (this.currentQuestion+1 != this.tests.test1.questions.length) {
        this.currentQuestion += 1;
      } else {
        this.end = true; 
        this.endTest();
      }
    },

    endTest () {
      for (let i = 0; i < this.tests.test1.questions.length; i++) {
        console.log(this.userAnswers[i], this.tests.test1.questions[i].correctAnswer);
        if (this.userAnswers[i] == this.tests.test1.questions[i].correctAnswer) {
          this.correctResults += 1;
        }
      }
    }
  }
})