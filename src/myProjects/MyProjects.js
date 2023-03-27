// Ocufly Images
import DJI from '../assets/projectImages/DJI-Tello-Drone.jpg'
import OcuflyLogo from '../assets/projectImages/Ocufly-blue-water.png'
import OcuflyPanel from '../assets/projectImages/Ocufly-screenshot.png'

// Wine Classification Images
import WinesInitial from '../assets/projectImages/Wines-ANN-initial.png'
import WinesMiddle from '../assets/projectImages/Wines-ANN-middle.png'
import WinesFinal from '../assets/projectImages/Wines-ANN-final.png'

// Auto Scheduler Images
import EmployeePage from '../assets/projectImages/auto-scheduler-app-employeespage.png'
import HomePage from '../assets/projectImages/auto-scheduler-app-homescreen.png'
import SchedulePage from '../assets/projectImages/auto-scheduler-app-schedulepage.png'

// Steganography Images
import SteganographyInitial from '../assets/projectImages/Steganography-initial.png'
import SteganographyEncrypt from '../assets/projectImages/Steganography-encrypt.png'
import SteganographyFinal from '../assets/projectImages/Steganography-final.png'

// Kimmi Kuiz Images
import KimmiKuizStart from '../assets/projectImages/KimmiKuizStart.png'
import KimmiKuizMultiple from '../assets/projectImages/KimmiKuizMultiple.png'
import KimmiKuizTrue from '../assets/projectImages/KimmiKuizTrue.png'
import KimmiKuizResult from '../assets/projectImages/KimmiKuizResult.png'

// Typing Speed Test
import TypingTestMain from '../assets/projectImages/TypingTest.png'
import TypingTestDifficulty from '../assets/projectImages/TypingTestDifficulty.png'
import TypingTestSpeed from '../assets/projectImages/TypingTestSpeed.png'
import TypingTestTime from '../assets/projectImages/TypingTestTime.png'

// Programming Icons
import CSSIcon from '../assets/programmingIcons/CSS.png'
import HTMLIcon from '../assets/programmingIcons/HTML.png'
import JavaIcon from '../assets/programmingIcons/Java.png'
import JSIcon from '../assets/programmingIcons/JS.png'
import NodeIcon from '../assets/programmingIcons/Node.png'
import ReactIcon from '../assets/programmingIcons/React.png'
import PythonIcon from '../assets/programmingIcons/Python.png'
import MongoDbIcon from '../assets/programmingIcons/MongoDB.png'


export const Ocufly = {
    title: 'Ocufly',
    images: [DJI, OcuflyLogo, OcuflyPanel],
    description: 'It might be a school project but the class made it seem as close to a real job situation as possible and it achieved. The goal: To create a program for a drone to fly and recognize objects in dangerous situations before sending in humans. I was lead developer on the flight software while the other half of the team worked on the object recognition software.',
    programmingIcons: [PythonIcon],
    color: '#359FD0',
}

export const WineClassification = {
    title: 'Wine Classification',
    images: [WinesInitial, WinesMiddle, WinesFinal],
    description: 'A neural network to classify a wine dataset into three mutually exclusive classes. First, the data is pre-processed and one hot-hot-encoded. Matplotlib is used to visulize the results after the model has completed its epochs.',
    programmingIcons: [PythonIcon],
    color: '#3F007D',
}

export const AutoScheduler = {
    title: 'Auto Scheduler',
    images: [HomePage, EmployeePage, SchedulePage],
    // description: 'What started out as a joke at work turned into a full project. This application will allow the user to input employees with a variety of attributes, saves them to the database and then based on these attributes it can then generate a random schedule while still pertaining to the constraints of a real schedule.',
    description: "What started out as a joke turned into one of the most in depth projects I've worked on outside of work. The store manager complained to me about making schedules for the crew. And if you haven't worked in the restaurant business in a college town... well let's just put it this way, it's hard to please everyone with one schedule. So, foolishly, I said 'I'll make something that can do that for you.'",
    programmingIcons: [ReactIcon, CSSIcon, HTMLIcon, JSIcon, NodeIcon, MongoDbIcon],
    color: '#9BDEAC',
}

export const Steganography = {
    title: 'Steganography',
    images: [SteganographyFinal, SteganographyEncrypt, SteganographyInitial],
    description: 'An application for hiding messages in an image. It also allows for decryption as well if it uses the same algorithm. The images show choosing an image, typing the message to encrypt, and finally the new encrypted image juxtaposed to the original. (Obviously they look identical to humans)',
    programmingIcons: [JavaIcon],
    color: '#0F3F78',
}

export const KimmiKuiz = {
    title: 'Kimmi Kuiz',
    images: [KimmiKuizStart, KimmiKuizMultiple, KimmiKuizTrue, KimmiKuizResult],
    description: "A quick valentine's day gift for my lovely fiance! A few multiple choice and true/false questions covering her interests from her favorite tv series to her favorite city (Paris of course). Complete with animations, wine intermissions, and prize money.",
    programmingIcons: [ReactIcon, CSSIcon, HTMLIcon, JSIcon],
    color: '#D66BA0',
}

export const TypingTest = {
    title: 'Typing Test',
    images: [TypingTestMain, TypingTestSpeed, TypingTestDifficulty, TypingTestTime],
    description: "This one was a little simpler, I'll admit, but I've always wanted to build one. After months of using other sites and noticing what I liked and didn't like it finally clicked... I can build that.",
    programmingIcons: [ReactIcon, CSSIcon, HTMLIcon, JSIcon],
    color: '#B5179E',
}