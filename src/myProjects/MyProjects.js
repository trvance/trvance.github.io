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
    description: 'What started out as a joke at work turned into a full project. This application will allow the user to input employees with a variety of attributes, saves them to the database and then based on these attributes it can then generate a random schedule while still pertaining to the constraints of a real schedule.',
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
    description: 'What started out as a joke at work turned into a full project. This application will allow the user to input employees with a variety of attributes, saves them to the database and then based on these attributes it can then generate a random schedule while still pertaining to the constraints of a real schedule.',
    programmingIcons: [ReactIcon, CSSIcon, HTMLIcon, JSIcon, NodeIcon, MongoDbIcon],
    color: '#9BDEAC',
}

export const Steganography = {
    title: 'Steganography',
    images: [SteganographyFinal, SteganographyEncrypt, SteganographyInitial],
    description: 'An application for hiding messages in an image. It also allows for decryption as well if it uses the same algorithm. The images respectively show choosing an image, typing the message to encrypt, and finally the new encrypted image juxtaposed to the original. (Obviously they look identical to humans)',
    programmingIcons: [JavaIcon],
    color: '#0F3F78',
}