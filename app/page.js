'use client'; // Client Component hona zaroori hai

import { useState } from 'react';
import Image from 'next/image';
import './globals.css';

// Quiz ka code ab English mein hai
const quizQuestions = [
  {
    questionText: 'What is the national animal of Pakistan?',
    answerOptions: [
      { answerText: 'Tiger', isCorrect: false },
      { answerText: 'Markhor', isCorrect: true },
      { answerText: 'Lion', isCorrect: false },
      { answerText: 'Karakul', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the highest peak in the world?',
    answerOptions: [
      { answerText: 'K2', isCorrect: false },
      { answerText: 'Mount Everest', isCorrect: true },
      { answerText: 'Nanga Parbat', isCorrect: false },
      { answerText: 'Broad Peak', isCorrect: false },
    ],
  },
  {
    questionText: '15 x 12 = ?',
    answerOptions: [
      { answerText: '160', isCorrect: false },
      { answerText: '170', isCorrect: false },
      { answerText: '180', isCorrect: true },
      { answerText: '190', isCorrect: false },
    ],
  },
  {
    questionText: 'She ____ to school Every Day.',
    answerOptions: [
      { answerText: 'go', isCorrect: false },
      { answerText: 'going', isCorrect: false },
      { answerText: 'gone', isCorrect: false },
      { answerText: 'goes', isCorrect: true },
    ],
  },
  {
    questionText: 'In which year was the first constitution of Pakistan formed ?',
    answerOptions: [
      { answerText: '1947', isCorrect: false },
      { answerText: '1956', isCorrect: true },
      { answerText: '1963', isCorrect: false },
      { answerText: '1972', isCorrect: false },
    ],
  },
  {
    questionText: 'Plural Of Child ?',
    answerOptions: [
      { answerText: 'Children', isCorrect: true },
      { answerText: 'Childes', isCorrect: false },
      { answerText: 'Childs', isCorrect: false },
      { answerText: 'Childrens', isCorrect: false },
    ],
  },
  {
    questionText: 'How many meters are in 1 kilometer ?',
    answerOptions: [
      { answerText: '10', isCorrect: false },
      { answerText: '100', isCorrect: false },
      { answerText: '1000', isCorrect: true },
      { answerText: '10000', isCorrect: false },
    ],
  },
  {
    questionText: 'Correct the sentence: “He don’t like mangoes.”',
    answerOptions: [
      { answerText: 'He doesn\'t like mangoes.', isCorrect: true },
      { answerText: 'He do\'t likes mangoes.', isCorrect: false },
      { answerText: 'He don\'t liking mangoes.', isCorrect: false },
      { answerText: 'He don\'t like mango.', isCorrect: false },
    ],
  },
  {
    questionText: 'Who was the father of Mughal Emperor Akbar ?',
    answerOptions: [
      { answerText: 'Hamayun', isCorrect: true },
      { answerText: 'Babar', isCorrect: false },
      { answerText: 'Jahangir', isCorrect: false },
      { answerText: 'Shah Jahan', isCorrect: false },
    ],
  },
  {
    questionText: 'Write 45/60 in simplest form:',
    answerOptions: [
      { answerText: '2/3', isCorrect: true },
      { answerText: '3/4', isCorrect: false },
      { answerText: '2/5', isCorrect: false },
      { answerText: '5/6', isCorrect: false },
    ],
  },
  {
    questionText: 'Identify the verb: “The dog runs fast.”',
    answerOptions: [
      { answerText: 'Dog', isCorrect: false },
      { answerText: 'Runs', isCorrect: true },
      { answerText: 'Fast', isCorrect: false },
      { answerText: 'The', isCorrect: false },
    ],
  },
  {
    questionText: 'When did the World War begin and when did it end ?',
    answerOptions: [
      { answerText: '1939-1945', isCorrect: true },
      { answerText: '1914-1918', isCorrect: false },
      { answerText: '1947-1953', isCorrect: false },
      { answerText: '1857-1861', isCorrect: false },
    ],
  },
  {
    questionText: 'If the price of one notebook is Rs 120, then what will be the total price of 5 notebooks ?',
    answerOptions: [
      { answerText: '540', isCorrect: false },
      { answerText: '560', isCorrect: false },
      { answerText: '580', isCorrect: false },
      { answerText: '600', isCorrect: true },
    ],
  },
  {
    questionText: 'Ali is taller ___ Ahmed.',
    answerOptions: [
      { answerText: 'then', isCorrect: false },
      { answerText: 'for', isCorrect: false },
      { answerText: 'than', isCorrect: true },
      { answerText: 'to', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the date of birth of Muhammad Ali Jinnah ?',
    answerOptions: [
      { answerText: '11th August 1876', isCorrect: false },
      { answerText: '25th Dcember 1876', isCorrect: true },
      { answerText: '11th september 1876', isCorrect: false },
      { answerText: '9th November 1876', isCorrect: false },
    ],
  },
  {
    questionText: 'Which city did Prophet Muhammad (peace be upon him) first go to after migrating ?',
    answerOptions: [
      { answerText: 'Macceh', isCorrect: false },
      { answerText: 'Taif', isCorrect: false },
      { answerText: 'Quba', isCorrect: false },
      { answerText: 'Madinah', isCorrect: true },
    ],
  },
  {
    questionText: 'Make a question with where:',
    answerOptions: [
      { answerText: 'Where you going ?', isCorrect: false },
      { answerText: 'Where are you going ?', isCorrect: true },
      { answerText: 'Where is going you ?', isCorrect: false },
      { answerText: 'Where going are you ?', isCorrect: false },
    ],
  },
  {
    questionText: '√144 = ?',
    answerOptions: [
      { answerText: '10', isCorrect: false },
      { answerText: '11', isCorrect: false },
      { answerText: '12', isCorrect: true },
      { answerText: '13', isCorrect: false },
    ],
  },
  {
    questionText: 'Solve it: 3x + 7 = 22 → x = ?',
    answerOptions: [
      { answerText: '3', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '5', isCorrect: false },
      { answerText: '6', isCorrect: false },
    ],
  },
  {
    questionText: 'Past tense of teach is ?',
    answerOptions: [
      { answerText: 'Teach', isCorrect: false },
      { answerText: 'Teached', isCorrect: false },
      { answerText: 'Teachen', isCorrect: false },
      { answerText: 'Taught', isCorrect: true },
    ],
  },
  {
    questionText: 'Who was the first Prime Minister of Pakistan ?',
    answerOptions: [
      { answerText: 'Liaquat Ali Khan', isCorrect: true },
      { answerText: 'Khawaja Nazimuddin', isCorrect: false },
      { answerText: 'Ayub Khan', isCorrect: false },
      { answerText: 'Muhammad Ali Bogra', isCorrect: false },
    ],
  },
  {
    questionText: 'A train runs at a speed of 60 km/h. What is the distance covered in 3 hours ?',
    answerOptions: [
      { answerText: '100 km', isCorrect: false },
      { answerText: '120 km', isCorrect: false },
      { answerText: '150 km', isCorrect: false },
      { answerText: '180 km', isCorrect: true },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section className="quiz-container">
      <h2>A Short Quiz</h2>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length} questions correctly.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};


// Aapka pehle se maujood Portfolio component
const Portfolio = () => {
    const [status, setStatus] = useState('');
    const [copyStatus, setCopyStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus('Sending...');
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('Message sent successfully!');
                e.target.reset();
            } else {
                setStatus('Failed to send message: ' + data.message);
            }
        } catch (error) {
            setStatus('An error occurred.');
            console.error('Submission error:', error);
        }
    };

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopyStatus('Link copied!');
                setTimeout(() => {
                    setCopyStatus('');
                }, 2000);
            })
            .catch(err => {
                setCopyStatus('Failed to copy link.');
                console.error('Copy failed:', err);
            });
    };

    return (
        <>
            <header className="hero">
                <div className="hero-content">
                    <Image
                            src="/BG.png" 
                            alt="Your Profile Picture"
                            className="profile-pic"
                            width={200}
                             height={200}
                         />
                    <h1>Hafiz Atif Salfi</h1>
                    <p>Web Developer</p>
                </div>
            </header>

            <main>
                <section className="about-me">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                             {/* app/page.js */}
                           <p>My name is Hafiz Atif Salfi. I am from Kasur, Pakistan. I have a strong passion for programming, web design, and game developing. I am always ready to learn new skills and apply them to real-world projects. This website provides information about my skills. Contact me on **salfiatif560@gmail.com**</p>
                      </div>
                    </div>
                </section>
                
                <section className="skills">
                    <h2>My Skills</h2>
                    <div className="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>Web Developing</span>
                    </div>
                </section>

                {/* Yahan naya quiz component add kiya gaya hai */}
                <QuizSection />

                <section className="contact-me">
                    <h2>Contact Me</h2>
                    <p className="contact-info">My Address: Elite City near Azhar colony opposite Basti Lal Shah, Kasur, Pakistan</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="your-email@example.com" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                    {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
                </section>
            </main>

            <footer>
                <div className="social-share">
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/hafiz.atif.salfi?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    {/* Gmail Icon
                    <a href="mailto:salfiatif560@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope"></i>
                    </a> */}
                    {/* Copy Link button */}
                    <button onClick={handleCopyLink} className="copy-link-btn">
                        <i className="fa-solid fa-link"></i>
                    </button>
                </div>
                {copyStatus && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{copyStatus}</p>}
                <p>&copy; 2025 Hafiz Atif Salfi. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Portfolio;